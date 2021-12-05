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
        $newUser->profilePic = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2Fistockphoto-1223671392-612x612.jpg?alt=media&token=c746eb6a-3d27-478f-8309-d1fef46c8930";

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

    public function updateAvatar(Request $request) {
        $userId = $request->input('userId');
        $user = User::where('userId', $userId)->first();
        // $user = DB::table('User')
        //         ->where('userId',$userId)->first();
        $user->profilePic = $request->input('profilePic');
        $user->update();

        return response()->json([
            'status' => 200,
            'user' => $user,
        ]);
    }

    public function getUserInfo(Request $request){
        $userId = $request->input('userId');
        $user = DB::table('User')
                ->where('userId',$userId)->first();

        if ($user != NULL){
            return response()->json([
                'status' => 200,
                'user' => $user,
                'message' => 'abc',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Account not found!',
            ]);
        }
    }
}
