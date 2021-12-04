<?php
namespace resources\views\welcome;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;


function getSongOfGenre(){
    $inputGenreId = 1;

    $songOfGenre = DB::table('Song')
        ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
        ->join('Genre','SongGenreRelation.genreId','=','Genre.genreId')
        ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
        ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
        ->where('Genre.genreId',$inputGenreId)
        ->select('Song.songId','imagePath','songPath','duration','title','genreName','genreImage','artistName')
        ->distinct()->get();

    $songResult = array();
    if ($songOfGenre->isEmpty() == false){
       foreach($songOfGenre as $song){ 
           echo "$song->imagePath<br/>";
           echo "$song->songPath<br/>";
           echo "$song->duration<br/>";
           echo "$song->title<br/>";
           echo "$song->genreName<br/>";
           echo "$song->genreImage<br/>";
           echo "$song->artistName<br/>";
           echo "<br/><br/>";
           array_push($songResult, $song);
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

function getUserInfo1(){
    $userId = 1;
    $user = DB::table('User')->where('userId',$userId)->first();
    return $user->username;
}
//echo "hi ";
//$name = getUserInfo1();
//echo $name;

getSongOfGenre();
            
?>

