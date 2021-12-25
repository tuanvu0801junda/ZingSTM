<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Album;

class AlbumController extends Controller{

    public function getAllAlbumInfo(){
        $albums = DB::table('Album')->get();
        $albumInfo = $albums->map(function($album){
            return [
                'id' => $album->albumId,
                'name' => $album->title,
                'type' => 'album'
            ];
        });
        return response()->json([
            'status' => 200,
            'albumInfo' => $albumInfo,
            'albums' => $albums->all(),
        ]);
    }

    public function postNewAlbum(Request $request){
        $newAlbum = new Album();
        $newAlbum->title = $request->input('title');
        $newAlbum->artworkPath = $request->input('artworkPath');

        $newAlbum->save();
        return response()->json([
            'status' => 200,
            'message' => 'Add New Album Successfully',
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
                'album' => $album  
            ]);
        }
    }

    public function getAlbumId(Request $request){
        $albumName = $request->input('albumName');
        $album = DB::table('Album')
                ->where('title',$albumName)
                ->select('albumId')
                ->first();

        if ($album != NULL){
            return response()->json([
                'status' => 200,
                'album' => $album,
                'message' => 'Get album id successfully!',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Album not found!',
            ]);
        }
    }

    public function updateOneAlbum(Request $request){
        $albumId = $request->input('albumId');
        $album = Album::find($albumId);
        $album->title = $request->input('albumTitle');
        $album->artworkPath = $request->input('artworkPath');
        $album->update();

        return response()->json([
            'status' => 200,
            'message' => 'Album Updated Successfully',
        ]);
    }

}
