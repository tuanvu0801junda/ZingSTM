<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArtistController extends Controller{
    //
    public function getAllArtistInfo(){
        $artists = DB::table('Artist')->get();
        return response()->json([
            'status' => 200,
            'artists' => $artists->all()
        ]);
    }

    public function getOneArtistInfo(Request $request){
        $artistId = $request->input('artistId');
        $artist = DB::table('Artist')
                ->where('artistId',$artistId)->first();

        if ($artist != NULL){
            // artistId, artistName, artistImage;
            return response()->json([
                'status' => 200,
                'artist' => $artist,
                'message' => 'Get 1 artist info successfully!',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Artist not found!',
            ]);
        }
    }
}
