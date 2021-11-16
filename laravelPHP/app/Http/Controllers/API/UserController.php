<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller{
    //
    public function login(Request $request){
        $username = $request->input('username');
        $password = $request->input('password');

        $user = DB::table('User')
                ->where('username',$username)->first();

        if (($user != NULL) && (Hash::check($password, $user->password))) {
            return response()->json([
                'status' => 200,
                'user' => $user,
                'message' => 'Login Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Login failed!',
            ]);
        }
    }

    public function signup(Request $request){
        $newUser = new User();
        $newUser->username = $request->input('username');
        $newUser->password = Hash::make($request->input('password'));
        $newUser->email = $request->input('email');
        $newUser->fullname = $request->input('fullname');
        $newUser->role = $request->input('role');

        //$profilePic = $request->input('profilePic'); 
        $newUser->profilePic = 'no-profile.jpg';
        //upload download file ....

        $newUser->save();
        return response()->json([
            'status' => 200,
            'newUser' => $newUser,
            'message' => 'Create Account Successfully',
        ]);
    }
}
