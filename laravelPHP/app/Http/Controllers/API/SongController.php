<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class SongController extends Controller{
    public function getSongOfGenre(Request $request){
        $inputGenreId = $request->input('genreId');

        $songOfGenre = DB::table('Song')
            ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
            ->join('Genre','SongGenreRelation.genreId','=','Genre.genreId')
            ->where('Genre.genreId',$inputGenreId)
            ->select('Song.songId','imagePath','songPath','duration','title','genreName','genreImage')
            ->distinct()->get();
        
        if ($songOfGenre->isEmpty() == false){
            // $songResult = array();
            // foreach($songOfGenre as $song){ 
            //     array_push($songResult, $song);
            // }
            return response()->json([
                'status' => 200,
                //'songs' => $songResult,
                'songs' => $songOfGenre->all(),
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Songs of Genre not found!',
            ]);
        }
    }

    public function getSongOfArtist(Request $request){
        $inputArtistId = $request->input('inputArtistId');

        $songOfArtist = DB::table('Song')
            ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
            ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
            ->where('Artist.artistId',$inputArtistId)
            ->select('Song.songId', 'imagePath', 'songPath', 'duration','title','artistName','artistImage')
            ->distinct()->get();
        
        if ($songOfArtist->isEmpty() == false){
            // $songResult = array();
            // foreach($songOfArtist as $song){ 
            //     array_push($songResult, $song);
            // }
            return response()->json([
                'status' => 200,
                //'songs' => $songOfArtist,
                'songs' => $songOfArtist->all(),
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Songs of Artist not found!',
            ]);
        }
    }

    public function getOneSongDetail(Request $request){
        $inputSongId = $request->input('songId');
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

    public function getSongOfAlbum(Request $request){
        $inputAlbumId = $request->input('inputAlbumId');
        //TODO
    }


}