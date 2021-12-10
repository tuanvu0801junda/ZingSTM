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
            'artists' => $artists->all(),
        ]);
    }
}
