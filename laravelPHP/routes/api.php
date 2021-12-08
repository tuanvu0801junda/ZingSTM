<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SongController;
use App\Http\Controllers\API\CommentController;

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

Route::post('/postSongComment',[CommentController::class, 'postSongComment']);
Route::post('/getUserInfo',[CommentController::class, 'getUserInfo']);
Route::post('/getAllSongComment',[CommentController::class, 'getAllSongComment']);
Route::post('/postPlaylistComment',[CommentController::class,'postPlaylistComment']);
Route::post('/getAllPlaylistComment',[CommentController::class,'getAllPlaylistComment']);
