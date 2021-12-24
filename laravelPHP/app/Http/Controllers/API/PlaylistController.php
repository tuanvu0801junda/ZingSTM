<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SharePlaylist;
use App\Models\PlaylistSongRelation;
use App\Models\Playlist;
use Carbon\Carbon;

class PlaylistController extends Controller{
  
    public function getVerifyCode(Request $request){
        $userId = $request->input('userId');
        $playlistId = $request->input('playlistId');
        $checkUser = DB::table('Playlist')
                ->where('playlistId',$playlistId)
                ->where('userId', $userId)
                ->first();

        if($checkUser != NULL){
            return response()->json([
                'status' => 200,
                'verifyCode' => $checkUser->verifyCode,
                'message' => 'Get verifyCode successfully',
            ]);
        } else{
            return response()->json([
                'status' => 404,
                'message' => 'Cannot get verifyCode',
            ]);
        }
    }
  
    public function checkVerifyCode(Request $request){
        $userId = $request->input('userId');
        $verifyCode = $request->input('verifyCode');
        $playlist = DB::table('Playlist')
                    ->where('verifyCode',$verifyCode)
                    ->first();
        if($playlist != NULL){
            if ((DB::table('SharePlaylist')->where('playlistId', $playlist->playlistId)->where('userId', $userId)->first()) != NULL)
            return response()->json([
                'status' => 201,
                'check' => FALSE,
                'message' => 'You are already joined this playlist!',
            ]);

            $addUser = new SharePlaylist();
            $addUser->userId = $userId;
            $addUser->playlistId = $playlist->playlistId;
            $addUser->save();

            return response()->json([
                'status' => 200,
                'check' => TRUE,
                'message' => 'Access Allowed!',
                'playlist' => $playlist,
                'test' => DB::table('SharePlaylist')->where('playlistId', $playlist->playlistId)->where('userId', $userId)->first()
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'check' => FALSE,
                'message' => 'Wrong verifyCode!',
            ]);
        }
    }
  
    public function addSongToPlaylist(Request $request){
        $playlistId = $request->input('playlistId');
        $songId = $request->input('songId');
        $checkSong = DB::table('PlaylistSongRelation')
                    ->where('playlistId',$playlistId)
                    ->where('songId', $songId)
                    ->first();
        if($checkSong == NULL){
            $lastSong = DB::table('PlaylistSongRelation')
                    ->where('playlistId',$playlistId)
                    ->orderBy('playlistOrder', 'desc')
                    ->first();

            if($lastSong != NULL){
                $order = $lastSong->playlistOrder;
            }else{
                $order = 0;
            }
            $addSong = new PlaylistSongRelation();
            $addSong->playlistId = $playlistId;
            $addSong->songId = $songId;
            $addSong->playlistOrder = $order + 1;
            $addSong->save();

            return response()->json([
                'status' => 200,
                'message' => 'Added song successfully',
            ]);
        }else{
            return response()->json([
                'status' => 1062,
                'message' => 'Duplicate! This song is already on the playlist!',
            ]);
        }
    }
 
    public function checkPlaylistMaker(Request $request){
        $checkPlaylist = DB::table('Playlist')
                    ->where('playlistId', $request->input('playlistId'))
                    ->where('userId', $request->input('userId'))
                    ->first();
        
        if($checkPlaylist != NULL){
            return response()->json([
                'status' => 200,
                'check' => TRUE,
                'message' => 'Correct!',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'check' => FALSE,
                'message' => 'Incorrect!',
            ]);
        }
    }

    public function getPlaylistCreatedByUser(Request $request){
        $userId = $request->input('userId');
        $playlists = DB::table('Playlist')
            ->select('playlistId', 'dateCreated', 'playlistName', 'verifyCode')
            ->where('userId',$userId)
            ->get();

        if ($playlists->isEmpty() == false){
            return response()->json([
                'status' => 200,
                'playlists' => $playlists->all(),
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Playlist not found!',
            ]);
        }
    }

    public function getPlaylistSharedByOther(Request $request){
        $userId = $request->input('userId');
        $sharePlaylist = DB::table('Playlist')
            ->join('SharePlaylist','SharePlaylist.playlistId','=','Playlist.playlistId')
            ->where('SharePlaylist.userId',$userId)
            ->select('SharePlaylist.playlistId', 'dateCreated', 'playlistName')
            ->get();

        if ($sharePlaylist->isEmpty() == false){
            return response()->json([
                'status' => 200,
                'playlists' => $sharePlaylist->all(),
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Share playlist not found!',
            ]);
        }
    }

    public function isAccessible(Request $request){
        $playlistId = $request->input('playlistId');
        $userId = $request->input('userId');
        $result = DB::table('SharePlaylist')
            ->where('userId',$userId)
            ->where('playlistId',$playlistId)->first();

        if($result != NULL){
            return response()->json([
                'status' => 200,
                'message' => 'Accessible',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'NOT Accessible',
            ]);
        }
    }

    public function createUserPlaylist(Request $request){
        $playlistName = $request->input('playlistName');
        $searchResult = DB::table('Playlist')
                ->where('playlistName',$playlistName)
                ->where('userId',$request->input('userId'))
                ->first();

        if($searchResult != NULL){
            //found same playlistName!
            return response()->json([
                'status' => 1062,
                'message' => 'Inputted playlistName already existed!',
            ]);
        } else {
            $newPlaylist = new Playlist();
            $newPlaylist->playlistName = $playlistName;
            $newPlaylist->userId = $request->input('userId');
            $newPlaylist->dateCreated = Carbon::now('Asia/Ho_Chi_Minh')->toDateTimeString();
            $newPlaylist->save();

            $str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstwuxyz';

            // mt_rand(10,99) --> 2 digits (each)
            $pin = mt_rand(10, 99) . $str[rand(0, strlen($str) - 1)]
                . mt_rand(10, 99) . $str[rand(0, strlen($str) - 1)];

            // shuffle the result
            $newPlaylist->verifyCode = $newPlaylist->playlistId . str_shuffle($pin);
            $newPlaylist->save();
            return response()->json([
                'status' => 200,
                'playlist' => $newPlaylist,
                'message' => 'Create Playlist Successfully',
            ]);
        }
    }

    public function getPlaylistInfo(Request $request){
        $playlistId = $request->input('playlistId');
        $userId = $request->input('userId');
        $playlist = DB::table('Playlist')
            ->where('playlistId',$playlistId)
            ->first();
        $songs = DB::table('Song')        
            ->join('PlaylistSongRelation','PlaylistSongRelation.songId','=','Song.songId')
            ->where('PlaylistSongRelation.playlistId',$playlistId)
            ->get();
        $check = DB::table('SharePlaylist') 
            ->where('playlistId',$playlistId)
            ->where('userId',$userId)
            ->first();

        if($playlist == NULL){
            return response()->json([
                'status' => 404,
                'message' => 'NOT Found',
            ]);
        }
        elseif($playlist->userId == $userId){   // playlist master
            return response()->json([
                'status' => 200,
                'playlist' => $playlist,
                'songs' => $songs,
                'message' => 'here your playlist',
            ]);
        }
        elseif($check != NULL){                 // shared user
            return response()->json([
                'status' => 200,
                'playlist' => $playlist,
                'songs' => $songs,
                'message' => 'Access Acepted',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Access Denied',
            ]);
        }


    }

    public function deleteSongFromPlaylist(Request $request){
        $playlistId = $request->input('playlistId');
        $songId = $request->input('songId');
        $song = PlaylistSongRelation::where('playlistId',$playlistId)
                    ->where('songId',$songId)
                    ->get();

        if($Song != NULL){
            $song->delete();

            return response()->json([
                'status' => 200,
                'message' => 'delete song successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'not found',
            ]);
        }
    }

    public function renamePlaylist(Request $request){
        $playlistId = $request->input('playlistId');
        $playlist = PlaylistSongRelation::where('playlistId',$playlistId)
                    ->get();

        if($playlist != NULL){
            $playlist->playlistName = $request->input('playlistName');
            $playlist->update();

            return response()->json([
                'status' => 200,
                'message' => 'rename song successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'not found',
            ]);
        }
    }

}
