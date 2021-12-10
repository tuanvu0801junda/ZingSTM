<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SongController;
use App\Http\Controllers\API\CommentController;
use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\GenreController;

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

Route::post('/postSongComment',[CommentController::class, 'postSongComment']);
Route::post('/getUserInfo',[CommentController::class, 'getUserInfo']);
Route::post('/getUserComment',[CommentController::class, 'getUserComment']);
Route::post('/getAllSongComment',[CommentController::class, 'getAllSongComment']);
Route::post('/postPlaylistComment',[CommentController::class,'postPlaylistComment']);
Route::post('/getAllPlaylistComment',[CommentController::class,'getAllPlaylistComment']);

Route::post('/getAllAlbumInfo',[AlbumController::class, 'getAllAlbumInfo']);

Route::post('/getAllGenreInfo',[GenreController::class, 'getAllGenreInfo']);

Route::post('/getAllArtistInfo',[ArtistController::class, 'getAllArtistInfo']);
Route::post('/getGenreInfoById',[GenreController::class, 'getGenreInfoById']);