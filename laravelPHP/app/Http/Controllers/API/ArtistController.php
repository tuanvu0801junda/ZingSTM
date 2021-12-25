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
        $artistInfo = $artists->map(function($artist){
            return [
                'id' => $artist->artistId,
                'name' => $artist->artistName,
                'type' => 'artist'
            ];
        });
        return response()->json([
            'status' => 200,
            'artistInfo' => $artistInfo,
            'artists' => $artists->all()
        ]);
    }
    public function postNewArtist(Request $request){
        $newArtist = new Artist();
        $newArtist->artistName = $request->input('artistName');
        $newArtist->artistImage = $request->input('artistImage');

        $newArtist->save();
        return response()->json([
            'status' => 200,
            'message' => 'Add New Artist Successfully',
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

    public function getArtistId(Request $request){
        $artistName = $request->input('artistName');
        $artist = DB::table('Artist')
                ->where('artistName',$artistName)
                ->select('artistId')
                ->first();

        if ($artist != NULL){
            return response()->json([
                'status' => 200,
                'artist' => $artist,
                'message' => 'Get artist id successfully!',
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
        if($request->input('artistName') != null)
            $artist->artistName = $request->input('artistName');
        if($request->input('artistImage') != null)
            $artist->artistImage = $request->input('artistImage');
        $artist->update();
        return response()->json([
            'status' => 200,
            'message' => 'Artist Updated Successfully',
        ]);
    }
}
