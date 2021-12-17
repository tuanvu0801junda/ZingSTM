<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Playlist;
use Carbon\Carbon;

class PlaylistController extends Controller{
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
            ->select('playlistId', 'dateCreated', 'playlistName')
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
                ->where('playlistName',$playlistName)->first();

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
            $newPlaylist->verifyCode = $newPlaylist->playlistId . "-" . str_shuffle($pin);
            return response()->json([
                'status' => 200,
                'playlist' => $newPlaylist,
                'message' => 'Create Playlist Successfully',
            ]);
        }
    }
}
