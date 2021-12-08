<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AlbumController extends Controller{

    public function getAllAlbumInfo(){
        $albums = DB::table('Album')->get();
        return response()->json([
            'status' => 200,
            'albums' => $albums->all(),
        ]);
    }
}
