<?php
namespace resources\views\welcome;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;


function getSongOfGenre(){
    $inputGenreId = 1;

    $song = DB::table('Song')
        ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
        ->join('Genre','SongGenreRelation.genreId','=','Genre.genreId')
        ->where('Genre.genreId',$inputGenreId);
        ->select('Song.songId','imagePath','songPath','duration','title','genreName','genreImage')->distinct()
        ->get();

    $songResult = array();
    if ($songOfGenre->isEmpty() == false){
       foreach($songOfGenre as $song){ 
           echo "$song->imagePath<br/>";
           echo "$song->songPath<br/>";
           echo "$song->duration<br/>";
           echo "$song->title<br/>";
           echo "$song->genreName<br/>";
           echo "$song->genreImage<br/>";
           echo "<br/><br/>";
           array_push($songResult, $song);
       }
    }
            // return response()->json([
            //     'status' => 200,
            //     'songsOfArtist' => $songOfGenre,
            // ]);
    } else {
        echo "Not found anything!";
            // return response()->json([
            //     'status' => 404,
            //     'message' => 'Songs of Genre not found!',
            // ]);
    }
}


getSongOfGenre();
            
?>

