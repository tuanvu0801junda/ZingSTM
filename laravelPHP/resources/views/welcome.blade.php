<?php
namespace resources\views\welcome;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\SongComment;
use App\Models\Artist;
use App\Models\Genre;
use Carbon\Carbon;
use App\Models\SharePlaylist;
use App\Models\PlaylistSongRelation;
use App\Models\SongArtistRelation;
use App\Models\SongGenreRelation;
use App\Models\ListenHistory;
use App\Models\Playlist;
use Illuminate\Support\Facades\Hash;


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


function getPlaylistInfo(){
    $playlistId = 3;
    $userId = 5;
    $playlist = DB::table('Playlist')
        ->where('playlistId',$playlistId)
        ->first();
    $songs = DB::table('Song')        
        ->join('PlaylistSongRelation','PlaylistSongRelation.songId','=','Song.songId')
        ->where('PlaylistSongRelation.playlistId',$playlistId)
        ->get();
    $check = DB::table('SharePlaylist') 
        ->where('playlistId',$playlistId)
        ->where('userId',$userId)
        ->first();

    if($playlist == NULL){
        
            echo 'NOT Found';
    }
    elseif($playlist->userId == $userId){   // playlist master
        
            echo  $playlist->playlistName;
            foreach($songs as $songs){ 

                echo "$songs->title<br/>";
            }
            echo'here your playlist';
    }
    elseif($check != NULL){                 // shared user
        echo  $playlist->playlistName;
            foreach($songs as $songs){ 

                echo "$songs->title<br/>";
            }
            echo 'Access Acepted';
    }else{
        echo 'Access Denied';
    }
}
//getPlaylistInfo();

function getSongNumberOfAnArtist(){
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
            
        
        echo $i;
        echo "    ";
        echo $albumArr[$i]['albumId'];
        echo "    ";
        echo $albumArr[$i]['songNumber'];
        echo "    ";
        echo $albumArr[$i]['totalPlay'];
        echo "</br>";
        $i++;
    }
    
}
function getSongOfAlbum($inputAlbumId){


    $songOfAlbum = DB::table('Song')
    ->join('SongArtistRelation','SongArtistRelation.songId','=','Song.songId')
    ->join('Artist','Artist.artistId','=','SongArtistRelation.artistId')
    ->join('SongGenreRelation','SongGenreRelation.songId','=','Song.songId')
    ->join('Genre','Genre.genreId','=','SongGenreRelation.genreId') 
    ->where('Song.albumId',$inputAlbumId)
    ->select('Song.songId', 'imagePath', 'songPath', 'duration','title','artistName','artistImage','genreName')
    ->distinct()->get();
    

    
           var_dump( $songOfAlbum);

    
}

function updateViewSong(){
    $songId = 1;
    $song = DB::table('Song')
        ->where('songId',$songId)
        ->increment('playTimes',1);
    
    $view = new ListenHistory();
    $view->songId = $songId;
    $view->listenDate = date("Y-m-d");
    $view->save();
}
function getListenHistory($songId){
    $view = DB::table('ListenHistory')->where('songId',$songId)->get();
    //echo $view;
    
    for($i =0;$i<7;$i++){
        $time = date_sub(date_create(date("Y-m-d")),date_interval_create_from_date_string("$i days"));
        $viewTime = DB::table('ListenHistory')
        ->where('songId',$songId)
        ->where('listenDate',$time)
        ->count();
        $viewArr[$i] = array('time'=> $time,'view'=>$viewTime);
        echo "$viewTime</br>";
    }
    
    var_dump($viewArr);
}

function deleteSongFromPlaylist(){
    $playlistId = 1;
    $songId = 2;
    $song = PlaylistSongRelation::where('playlistId',$playlistId)
                ->where('songId',$songId)
                ->first();

    if($song != NULL){
        echo $song;
        PlaylistSongRelation::where('playlistId',$playlistId)
        ->where('songId',$songId)->delete();


            echo "delete song successfully";
    }else{

            echo 'not found';
    }
}

function renamePlaylist(){
    $playlistId = 1;
    $playlist = Playlist::where('playlistId',$playlistId)
                ->first();

    if($playlist != NULL){
        
        Playlist::where('playlistId',$playlistId)->update(['playlistName' => "abcxyz"]);

        echo "rename successfully";
    }else{

            echo 'not found';
    }


}

function changePass($userId, $password, $newPassword){
    $user = DB::table('User')
            ->where('userId',$userId)->first();

    if (Hash::check($password, $user->password)) {
        $user = User::where('userId', $userId)->first();

        $user->password = Hash::make($newPassword);
        $user->update();

        $userResult = array(
            'userId' => $user->userId, 
            'email' => $user->email, 
            'fullname' => $user->fullname, 
            'profilePic' => $user->profilePic,
            'role' => $user->role
        );
        echo 'Change Successfully';
    } else {
        
            echo 'Wrong password';
    }
}

?>

