<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Song;
use Illuminate\Http\Request;
use App\Models\SongArtistRelation;
use App\Models\SongGenreRelation;

class SongController extends Controller{
    
    public function getAllSongInfo(){
        $songs = DB::table('Song')
            ->join('Album','Album.albumId','=','Song.albumId')
            ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
            ->join('Genre','SongGenreRelation.genreId','=','Genre.genreId')
            ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
            ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
            ->select('Song.songId','imagePath','songPath','duration','Song.title','Album.title AS albumTitle','genreName','artistName')->get();
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
            ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
            ->join('Genre','Genre.genreId','=','SongGenreRelation.genreId')
            ->join('Album','Album.albumId','=','Song.albumId')
            ->where('Song.songId',$inputSongId)
            ->select('imagePath', 'songPath', 'duration','Song.title','Album.title AS albumName','artistName','genreName')
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
        //songId, imagePath, albumId, artistId
        $songId = $request->input('songId');
        $song = Song::find($songId);
        $song->imagePath = $request->input('imagePath');
        $albumId = $request->input('albumId');
        if(strcmp($albumId,"null") == 0){
            $song->albumId = null;   
        } else {
            $song->albumId = $albumId;
        }
        $song->update();

        //$affected return number of rows affected by query
        $affected = DB::table('SongArtistRelation')
                    ->where('songId',$songId)
                    ->update(['artistId' => $request->input('artistId')]);
        
        if($affected >= 0){
            return response()->json([
                'status' => 200,
                'message' => 'Update Song successfully',
            ]);
        } else{
            return response()->json([
                'status' => 500,
                'message' => 'Error happen when updating',
            ]);
        }
    }

    // public function getSongNumberOfAnArtist(Request $request){
    //     $artistId = $request->input('artistId');
    //     $songNumber = DB::table('SongArtistRelation')
    //                     ->where('artistId',$artistId)->count();
    //     if($songNumber >= 0){
    //         return response()->json([
    //             'status' => 200,
    //             'numberSong' => $songNumber,
    //         ]);
    //     }else{
    //         return response()->json([
    //             'status' => 404,
    //             'message' => 'Cannot count!',
    //         ]);
    //     }
    // }

    // public function getAlbumStatistic(Request $request){
    //     $albumId = $request->input('albumId');

    //     //number of song in album
    //     $songNumber = DB::table('Song')
    //                     ->where('albumId',$albumId)->count();

    //     //total playtimes of whole album
    //     $totalPlay = DB::table('Song')
    //                     ->where('albumId',$albumId)->sum('playTimes');

    //     if($songNumber >= 0 && $totalPlay >= 0){
    //         return response()->json([
    //             'status' => 200,
    //             'numberSong' => $songNumber,
    //             'totalPlayTimes' => $totalPlay,
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 404,
    //             'message' => 'Cannot count!',
    //         ]);
    //     }
    // }
    public function getSongNumberOfAnArtist(){
        $artist = DB::table('SongArtistRelation')
                        ->groupBy('artistId')
                        ->get('artistId');
        $i=0;
        foreach($artist as $artist){ 
            $song = DB::table('SongArtistRelation')
                        ->where('artistId', $artist->artistId)
                        ->count();
            $artistArr[$i] = array('artistId'=> $artist->artistId,'songNumber'=>$song);
            $i++;
        }
        $i--;
        if($i >= 0){
            return response()->json([
                'status' => 200,
                'artistSong' => $artistArr,
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'DB null!',
            ]);
        }
    }

    public function getAlbumStatistic(){

        $album = DB::table('Song')
                        ->groupBy('albumId')
                        ->get('albumId');
        $i=0;
        foreach($album as $album){ 
            $song = DB::table('Song')
                        ->where('albumId', $album->albumId)
                        ->count();
            $totalPlay = DB::table('Song')
                            ->where('albumId',$album->albumId)->sum('playTimes');
            $albumArr[$i] = array('albumId'=> $album->albumId,'songNumber'=>$song,'totalPlay'=>$totalPlay);
            $i++;
        }
        $i--;
        if($i >= 0){
            return response()->json([
                'status' => 200,
                'albumSong' => $albumArr,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Cannot count!',
            ]);
        }
    }


    public function getTotalSong(){
        $totalSong = DB::table('Song')->count();
        if($totalSong >= 0){
            return response()->json([
                'status' => 200,
                'totalSong' => $totalSong,
            ]);
        } else{
            return response()->json([
                'status' => 404,
                'message' => 'Cannot get Total Song'
            ]);
        }
    }

    public function insertSongArtistRelation(Request $request){
        $newRow = new SongArtistRelation();
        $newRow->songId = $request->input('songId');
        $newRow->artistId = $request->input('artistId');
        $newRow->save();

        return response()->json([
            'status' => 200,
            'message' => 'Insert SongArtistRelation Successfully',
        ]);
    }

    public function insertSongGenreRelation(Request $request){
        $newRow = new SongGenreRelation();
        $newRow->songId = $request->input('songId');
        $newRow->genreId = $request->input('genreId');
        $newRow->save();

        return response()->json([
            'status' => 200,
            'message' => 'Insert SongGenreRelation Successfully',
        ]);
    }
}