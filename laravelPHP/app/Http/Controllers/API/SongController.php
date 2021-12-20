<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller{
    
    public function getAllSongInfo(){
        $songs = DB::table('Song')
            ->join('Album','Album.albumId','=','Song.albumId')
            ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
            ->join('Genre','SongGenreRelation.genreId','=','Genre.genreId')
            ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
            ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
            ->select('Song.songId','imagePath','songPath','duration','Song.title','Album.title','genreName','artistName')->get();
        return response() ->json([
            'status' => 200,
            'songs' => $songs
        ]);
    }

    public function postNewSong(Request $request){
        $newSong = new Song();
        $newSong->albumId = $request->input('albumId');
        $newSong->imagePath = $request->input('imagePath');
        $newSong->songPath = $request->input('songPath');
        $newSong->title = $request->input('title');
        $newSong->duration = $request->input('duration');

        $newSong->save();
        return response()->json([
            'status' => 200,
            'songId' => $newSong->songId,
            'message' => 'Add New Song Successfully',
        ]);
    }

    public function getSongOfGenre(Request $request){
        $inputGenreId = $request->input('genreId');

        $songOfGenre = DB::table('Song')
            ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
            ->join('Genre','SongGenreRelation.genreId','=','Genre.genreId')
            ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
            ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
            ->where('Genre.genreId',$inputGenreId)
            ->select('Song.songId','imagePath','songPath','duration','title','genreName','genreImage','artistName')
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
        $inputArtistId = $request->input('artistId');

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
        $song = DB::table('Song')
            ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
            ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
            ->where('Song.songId',$inputSongId)
            ->select('imagePath', 'songPath', 'duration','title','artistName')
            ->first();

        if ($song != NULL){
            return response()->json([
                'status' => 200,
                'song' => $song,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Song Detail not found!',
                'songId' => $inputSongId,
            ]);
        }
    }

    public function getSongOfAlbum(Request $request){
        $inputAlbumId = $request->input('albumId');

        $songOfAlbum = DB::table('Song')
            ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
            ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
            ->where('Song.albumId',$inputAlbumId)
            ->select('Song.songId', 'imagePath', 'songPath', 'duration','title','artistName','artistImage')
            ->distinct()->get();
        
        if ($songOfAlbum->isEmpty() == false){
            // $songResult = array();
            // foreach($songOfArtist as $song){ 
            //     array_push($songResult, $song);
            // }
            return response()->json([
                'status' => 200,
                //'songs' => $songOfArtist,
                'songs' => $songOfAlbum->all(),
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Songs of Album not found!',
            ]);
        }
    }

    public function updateViewSong(Request $request){
        $songId = $request->input('songId');
        $song = DB::table('Song')
            ->where('songId',$songId)
            ->increment('playTimes',1);
        
        if ($song != NULL){
            return response()->json([
                'status' => 200,
                'message' => 'Update view song successfully!',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Cannot update view song!',
            ]);
        }
    }
    public function getTopView(){
        $song = DB::table('Song')
            ->orderBy('playTimes', 'desc')->take(3)->get();
        
        if ($song != NULL){
            return response()->json([
                'status' => 200,
                'songs' => $song->all(),
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Songs not found!',
            ]);
        }
    }

    public function deleteOneSong(Request $request){
        $songId = $request->input('songId');
        $song = Song::find($songId);
        $song->delete();

        // catch status 200 and render with SweetAlert
        return response()->json([
            'status' => 200,
            'message' => 'Song Deleted Successfully',
        ]);
    }

    public function updateOneSong(Request $request){
        //
    }

    public function getSongNumberOfAnArtist(Request $request){
        $artistId = $request->input('artistId');
        $songNumber = DB::table('SongArtistRelation')
                        ->where('artistId',$artistId)->count();
        if($songNumber >= 0){
            return response()->json([
                'status' => 200,
                'numberSong' => $songNumber,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Cannot count!',
            ]);
        }
    }

    public function getAlbumStatistic(Request $request){
        $albumId = $request->input('albumId');

        //number of song in album
        $songNumber = DB::table('Song')
                        ->where('albumId',$albumId)->count();

        //total playtimes of whole album
        $totalPlay = DB::table('Song')
                        ->where('albumId',$albumId)->sum('playTimes');

        if($songNumber >= 0 && $totalPlay >= 0){
            return response()->json([
                'status' => 200,
                'numberSong' => $songNumber,
                'totalPlayTimes' => $totalPlay,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Cannot count!',
            ]);
        }
    }
}