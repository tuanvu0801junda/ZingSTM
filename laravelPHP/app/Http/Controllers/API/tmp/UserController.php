<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller{
    //
    public function login(Request $request){
        $username = $request->input('username');
        $password = $request->input('password');

        $user = DB::table('User')
                ->where('username',$username)
                ->where('password',$password)->get();

        if ($user->count() == 0){
            return response()->json([
                'status' => 404,
                'message' => 'Login failed!',
            ]);
        }
        else {
            return response()->json([
                'status' => 200,
                'user' => $user,
                'message' => 'Login Successfully',
            ]);
        }
        
    }
}
