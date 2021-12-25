<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Genre;


class GenreController extends Controller{
    //
    public function getAllGenreInfo(){
        $genres = DB::table('Genre')->get();
        $genreInfo = $genres->map(function($genre){
            return [
                'id' => $genre->genreId,
                'name' => $genre->genreName,
                'type' => 'genre'
            ];
        });
        return response()->json([
            'status' => 200,
            'genreInfo' => $genreInfo,
            'genres' => $genres->all(),
        ]);
    }
    public function postNewGenre(Request $request){
        $newGenre = new Genre();
        $newGenre->genreName = $request->input('genreName');
        $newGenre->genreImage = $request->input('genreImage');

        $newGenre->save();
        return response()->json([
            'status' => 200,
            'message' => 'Add New Genre Successfully',
        ]);
    }

    public function deleteOneGenre(Request $request){
        $genreId = $request->input('genreId');
        $genre = Genre::find($genreId);
        $genre->delete();
        // catch status 200 and render with SweetAlert
        return response()->json([
            'status' => 200,
            'message' => 'Genre Deleted Successfully',
        ]);
    }
    public function getGenreInfoById(Request $request){
        $inputGenreId = $request->input('genreId');
        $genre = DB::table('Genre')
                ->where('genreId',$inputGenreId)
                ->first();
        return response()->json([
            'status' => 200,
            'genre' => $genre,
            'message' => 'Get 1 genre info successfully!',
        ]);
    }

    public function updateOneGenre(Request $request){
        $genreId = $request->input('genreId');
        $genre = Genre::find($genreId);
        if($request->input('genreName') != null)
            $genre->genreName = $request->input('genreName');
        if($request->input('genreImage') != null)
            $genre->genreImage = $request->input('genreImage');
        $genre->update();
        return response()->json([
            'status' => 200,
            'message' => 'Genre Updated Successfully',
        ]);
    }

    public function getGenreId(Request $request){
        $genreName = $request->input('genreName');
        $genre = DB::table('Genre')
                ->where('genreName',$genreName)
                ->select('genreId')
                ->first();

        if ($genre != NULL){
            return response()->json([
                'status' => 200,
                'genre' => $genre,
                'message' => 'Get genre id successfully!',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Genre not found!',
            ]);
        }
    }
}
