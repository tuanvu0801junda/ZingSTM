<?php
namespace resources\views\welcome;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\SongComment;
use App\Models\Artist;
use App\Models\Genre;
use Carbon\Carbon;

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



function postSongComment(){
    $songComment = new SongComment();
    $songComment->userId = 2;
    $songComment->userComment = "いいね!";
    $songComment->songId = 1;
    $songComment->createdDate = Carbon::now('Asia/Ho_Chi_Minh')->toDateTimeString();
    // Be careful with this!

    $songComment->save();
    echo "Save successfully";
    // return response()->json([
    //     'status' => 200,
    //     'message' => 'Create Song Comment Successfully',
    // ]);
}

function getAllSongComment(){
    $songId = 1;
    $comments = DB::table('SongComment')->where('songId',$songId)->get();

    if ($comments->isEmpty() == false){
        foreach($comments as $comment){
            echo "$comment->userId<br/>";
            echo "$comment->songId<br/>";
            echo "$comment->userComment<br/>";
            echo "<br/><br/>";
        }
        // return response()->json([
        //     'status' => 200,
        //     'songs' => $comments->all(),
        // ]); 
    } else {
        // return response()->json([
        //     'status' => 404,
        //     'message' => 'Comment(s) not found!',
        // ]);
        echo "Not found! <br/>";
    }
}
//echo "hi ";
//$name = getUserInfo1();
//echo $name;

//getSongOfGenre();
//postSongComment();  
//getAllSongComment();    

function updateViewSong(int $songId){
    DB::table('Song')
        ->where('songId',$songId)
        ->increment('playTimes',1);
    $song = DB::table('Song')
        ->where('songId',$songId)
        ->get();
        $songResult = array();
        foreach($song as $song1){ 

            echo "$song1->title<br/>";
            echo "$song1->playTimes<br/>";

            echo "<br/><br/>";
            array_push($songResult, $song);
        }

    
}
function getTopView(){
    $song = DB::table('Song')
        ->orderBy('playTimes', 'desc')
        ->take(3)
        ->get();
        //$songResult = array();
        foreach($song as $song1){ 

            echo "$song1->title<br/>";
            echo "$song1->playTimes<br/>";

            echo "<br/><br/>";
            //array_push($songResult, $song);
        }
        
    
    
}

function getGenreInfoById($id){

    $genres = DB::table('Genre')
            ->where('genreId',$id)
            ->get();
            foreach($genres as $genre){ 

                echo "$genre->genreName<br/>";
                echo "$genre->genreImage<br/>";
    
                echo "<br/><br/>";
            }
}
function getAllArtistInfo(){
    $artists = DB::table('Artist')->get();
    foreach($artists as $artist){ 

        echo "$artist->artistName<br/>";

        echo "<br/><br/>";
    
    }
}
//getGenreInfoById(2);
//getAllArtistInfo();

function getUserInfo1(){
    $userId = 1;
    $user = DB::table('User')
                ->where('userId',$userId)
                ->select('userId','email', 'fullname', 'profilePic', 'role')
                ->first();
        echo "$user->userId<br/>";
        echo "$user->email<br/>";
        echo "$user->fullname<br/>";
        //echo "$user->username<br/>";
        echo "$user->profilePic<br/>";
        //echo "$user->password<br/>";
        echo "$user->role<br/>";
}

//getUserInfo1();
?>

