<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SongController;
use App\Http\Controllers\API\CommentController;
use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\GenreController;
use App\Http\Controllers\API\ArtistController;
use App\Http\Controllers\API\PlaylistController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);
Route::post('/sign-up', [UserController::class, 'signup']);
Route::post('/updateAvatar', [UserController::class, 'updateAvatar']);
Route::post('/getUserInfo', [UserController::class, 'getUserInfo']);

Route::post('/getGenresSong', [SongController::class, 'getSongOfGenre']);
Route::post('/getArtistsSong', [SongController::class, 'getSongOfArtist']);
Route::post('/getSongInfo', [SongController::class, 'getOneSongDetail']);
Route::post('/getSongOfAlbum', [SongController::class, 'getSongOfAlbum']);
Route::post('/updateViewSong', [SongController::class, 'updateViewSong']);
Route::post('/getTopView', [SongController::class, 'getTopView']);
Route::post('/getAllSongInfo', [SongController::class, 'getAllSongInfo']);
Route::post('/getOneSongDetail', [SongController::class, 'getOneSongDetail']);
Route::post('/deleteOneSong', [SongController::class, 'deleteOneSong']);
Route::post('/updateOneSong', [SongController::class, 'updateOneSong']);
Route::post('/getSongNumberOfAnArtist', [SongController::class, 'getSongNumberOfAnArtist']);
Route::post('/getAlbumStatistic', [SongController::class, 'getAlbumStatistic']);
Route::post('/getTotalSong', [SongController::class, 'getTotalSong']);
Route::post('/insertSongArtistRelation', [SongController::class, 'insertSongArtistRelation']);
Route::post('/getListenHistory', [SongController::class, 'getListenHistory']);


Route::post('/postSongComment',[CommentController::class, 'postSongComment']);
Route::post('/getUserComment',[CommentController::class, 'getUserComment']);
Route::post('/getAllSongComment',[CommentController::class, 'getAllSongComment']);
Route::post('/postPlaylistComment',[CommentController::class,'postPlaylistComment']);
Route::post('/getAllPlaylistComment',[CommentController::class,'getAllPlaylistComment']);

Route::post('/getAllAlbumInfo',[AlbumController::class, 'getAllAlbumInfo']);
Route::post('/deleteOneAlbum',[AlbumController::class, 'deleteOneAlbum']);
Route::post('/getOneAlbumInfo',[AlbumController::class, 'getOneAlbumInfo']);
Route::post('/updateOneAlbum',[AlbumController::class, 'updateOneAlbum']);

Route::post('/getAllArtistInfo',[ArtistController::class, 'getAllArtistInfo']);
Route::post('/getOneArtistInfo',[ArtistController::class, 'getOneArtistInfo']);
Route::post('/deleteOneArtist',[ArtistController::class, 'deleteOneArtist']);
Route::post('/updateOneArtist',[ArtistController::class, 'updateOneArtist']);

Route::post('/getGenreInfoById',[GenreController::class, 'getGenreInfoById']);
Route::post('/getAllGenreInfo',[GenreController::class, 'getAllGenreInfo']);

Route::post('/getPlaylistCreatedByUser',[PlaylistController::class, 'getPlaylistCreatedByUser']);
Route::post('/getPlaylistSharedByOther',[PlaylistController::class, 'getPlaylistSharedByOther']);
Route::post('/isAccessible',[PlaylistController::class, 'isAccessible']);
Route::post('/createUserPlaylist',[PlaylistController::class, 'createUserPlaylist']);
Route::post('/getVerifyCode',[PlaylistController::class, 'getVerifyCode']);
Route::post('/checkVerifyCode',[PlaylistController::class, 'checkVerifyCode']);
Route::post('/addSongToPlaylist',[PlaylistController::class, 'addSongToPlaylist']);
Route::post('/checkPlaylistMaker',[PlaylistController::class, 'checkPlaylistMaker']);
Route::post('/getPlaylistInfo',[PlaylistController::class, 'getPlaylistInfo']);
Route::post('/deleteSongFromPlaylist',[PlaylistController::class, 'deleteSongFromPlaylist']);
Route::post('/renamePlaylist',[PlaylistController::class, 'renamePlaylist']);




