<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GenreController extends Controller{
    //
    public function getAllGenreInfo(){
        $genres = DB::table('Genre')->get();
        return response()->json([
            'status' => 200,
            'genres' => $genres->all(),
        ]);
    }
    public function getGenreInfoById(Request $request){
        $inputGenreId = $request->input('genreId');
        $genres = DB::table('Genre')
                ->where('genreId',$inputGenreId)
                ->get();
        return response()->json([
            'status' => 200,
            'genres' => $genres->all(),
        ]);
    }
}
