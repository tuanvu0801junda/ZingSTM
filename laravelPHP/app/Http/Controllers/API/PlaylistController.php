<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\SharePlaylist;
use App\Models\PlaylistSongRelation;

class PlaylistController extends Controller
{
    public function getVerifyCode(Request $request){
        $userId = $request -> input('userId');
        $playlistId = $request -> input('playlistId');
        $checkUser  = DB::table('Playlist')
                    ->where('playlistId',$playlistId)
                    ->where('userId', $userId)
                    ->first();
        if($checkUser != NULL){
            return response()->json([
                'status' => 200,
                'verifyCode' => $checkUser->verifyCode,
                'message' => 'Get code Successfully',
            ]);
        }

    }
    public function checkVerifyCode(Request $request){
        $userId = $request -> input('userId');
        $verifyCode = $request -> input('verifyCode');
        $playlist = DB::table('Playlist')
                    ->where('verifyCode',$verifyCode)
                    ->first();
        if($playlist != NULL){
            $addUser = new SharePlaylist();
            $addUser->userId = $userId;
            $addUser->playlistId = $playlist->playlistId;
            $addUser->save();

            return response()->json([
                'status' => 200,
                'check' => TRUE,
                'message' => 'Access Allowed!',
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
        $playlistId = $request -> input('playlistId');
        $songId = $request -> input('songId');
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
                'message' => 'Add song Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 200,
                'message' => 'Add song Already',
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
}
