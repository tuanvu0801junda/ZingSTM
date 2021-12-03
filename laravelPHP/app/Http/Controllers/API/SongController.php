<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function getSongOfGenre(Request $request){
        $inputGenreId = $request->input('inputGenreId');
        $songOfGenre = DB::table('Song')
            ->select('songId', 'imagePath', 'songPath', 'duration','title','genreName')
            ->distinct()
            ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
            ->join('Genre','Genre.genreId','=','SongGenreRelation.genreId')
            ->where('Genre.genreId','=',$inputGenreId)
            ->first();
 
        if ($songOfGenre != NULL){
            //front end TODO
            echo "$songOfGenre";
            return response()->json([
                'status' => 200,
                'songsOfArtist' => $songOfGenre,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Songs of Genre not found!',
            ]);
        }
    }

    public function getOneSongDetail(Request $request){
        $inputSongId = $request->input('inputSongId');
        $song = DB::table('Song')->where('songId',$inputSongId)->first();

        if ($song != NULL){
            return response()->json([
                'status' => 200,
                'song' => $song,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Song Detail not found!',
            ]);
        }
    }
}