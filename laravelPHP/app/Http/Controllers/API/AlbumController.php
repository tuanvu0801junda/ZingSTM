<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Album;

class AlbumController extends Controller{

    public function getAllAlbumInfo(){
        $albums = DB::table('Album')->get();
        return response()->json([
            'status' => 200,
            'albums' => $albums->all(),
        ]);
    }

    public function deleteOneAlbum(Request $request){
        $albumId = $request->input('albumId');
        $album = Album::find($albumId);
        $album->delete();
        // catch status 200 and render with SweetAlert
        return response()->json([
            'status' => 200,
            'message' => 'Album Deleted Successfully',
        ]);
    }

    public function getOneAlbumInfo(Request $request){
        $albumId = $request->input('albumId');
        $album = Album::where('albumId',$albumId)->first();
        if($album == NULL){
            return response()->json([
                'status' => 404,
                'message' => 'Album Not Found',
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'title' => $album->title,  
                'artworkPath' => $album->artworkPath,
                'albumId' => $album->albumId,
            ]);
        }
    }

    public function updateOneAlbum(Request $request){
        $albumId = $request->input('albumId');
        $album = Album::find($albumId);
        $album->albumTitle = $request->input('albumTitle');
        $album->artworkPath = $request->input('artworkPath');
        $album->update();

        return response()->json([
            'status' => 200,
            'message' => 'Album Updated Successfully',
        ]);
    }

}
