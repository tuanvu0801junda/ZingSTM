<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Artist;

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

    public function deleteOneArtist(Request $request){
        $artistId = $request->input('artistId');
        $artist = Artist::find($artistId);
        $artist->delete();
        // catch status 200 and render with SweetAlert
        return response()->json([
            'status' => 200,
            'message' => 'Artist Deleted Successfully',
        ]);
    }

    public function updateOneArtist(Request $request){
        $artistId = $request->input('artistId');
        $artist = Artist::find($artistId);
        $artist->artistName = $request->input('artistName');
        $artist->artistImage = $request->input('artistImage');
        $artist->update();
        return response()->json([
            'status' => 200,
            'message' => 'Artist Updated Successfully',
        ]);
    }
}
