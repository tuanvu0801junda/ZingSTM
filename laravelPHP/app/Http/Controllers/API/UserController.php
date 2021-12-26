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
            $userResult = array(
                'userId' => $user->userId, 
                'email' => $user->email, 
                'fullname' => $user->fullname, 
                'profilePic' => $user->profilePic,
                'role' => $user->role
            );
            return response()->json([
                'status' => 200,
                'user' => $userResult,
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
        $inputUsername = $request->input('username');
        $searchResult = DB::table('User')
                ->where('username',$inputUsername)->first();

        if($searchResult != NULL){
            //found same username!
            return response()->json([
                'status' => 1062,
                'message' => 'Inputted username already existed!',
            ]);
        } else {
            $newUser = new User();
            $newUser->username = $request->input('username');
            $newUser->password = Hash::make($request->input('password'));
            $newUser->email = $request->input('email');
            $newUser->fullname = $request->input('fullname');
            $newUser->role = $request->input('role');
            $newUser->profilePic = "https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FAvatarImages%2Fistockphoto-1223671392-612x612.jpg?alt=media&token=c746eb6a-3d27-478f-8309-d1fef46c8930";

            $newUser->save();
            $userResult = array(
                'userId' => $newUser->userId, 
                'email' => $newUser->email, 
                'fullname' => $newUser->fullname, 
                'profilePic' => $newUser->profilePic,
                'role' => $newUser->role
            );
            return response()->json([
                'status' => 200,
                'newUser' => $userResult,
                'message' => 'Create Account Successfully',
            ]);
        }
    }

    public function updateAvatar(Request $request) {
        $userId = $request->input('userId');
        $user = User::where('userId', $userId)->first();
        // $user = DB::table('User')
        //         ->where('userId',$userId)->first();
        $user->profilePic = $request->input('profilePic');
        $user->update();
        $userResult = array(
            'userId' => $user->userId, 
            'email' => $user->email, 
            'fullname' => $user->fullname, 
            'profilePic' => $user->profilePic,
            'role' => $user->role
        );
        return response()->json([
            'status' => 200,
            'user' => $userResult,
        ]);
    }

    public function getUserInfo(Request $request){
        $userId = $request->input('userId');
        $user = DB::table('User')
                ->where('userId',$userId)
                ->select('userId','email', 'fullname', 'profilePic', 'role')
                ->first();

        if ($user != NULL){
            return response()->json([
                'status' => 200,
                'user' => $user,
                'message' => 'Get UserInfo successfully!',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Account not found!',
            ]);
        }
    }

    public function getAllUserInfo(){
        $user = DB::table('User')->where('role',0)->get();
        $admin = DB::table('User')->where('role',1)->get();
        $superAdmin = DB::table('User')->where('role',2)->select('password','username')->get();
        if($user != null && $admin != null){
            return response()->json([
                'status' => 200,
                'users' => $user->all(),
                'superAdmin' => $superAdmin->all(),
                'admin' => $admin->all()
            ]);
        }else if($user != null){
            return response()->json([
                'status' => 200,
                'users' => $user->all(),
                'superAdmin' => $superAdmin->all()
            ]);
        }else if($admin != null){
            return response()->json([
                'status' => 200,
                'admin' => $admin->all(),
                'superAdmin' => $superAdmin->all()
            ]);
        }else {
            return response()->json([
                'status' => 404,
                'message' => 'Not found!',
            ]);
        }
        
    }

    public function checkSuperAdminPassword (Request $request){
        $superAdminId = $request->input('id');
        $superAdminPassword = $request->input('password');
        $superAdmin = DB::table('User')
                ->where('userId',$superAdminId)->first();
                
        if (Hash::check($superAdminPassword, $superAdmin->password)) {
            return response()->json([
                'status' => 200,
                'check' => true,
            ]);
        } else {
            return response()->json([
                'status' => 100,
                'check' => false,
            ]);
        }
    }

    public function updateUser(Request $request){
        $userId = $request->input('userId');
    
        if($userId != null){
            $user = User::find($userId);
            if($user->role == 0){
                $user->role = 1;
            }else if($user->role == 1){
                $user->role = 0;
            }
            $user->update();
        }
        $userUpdate = DB::table('User')->where('role',0)->get();
        $adminUpdate = DB::table('User')->where('role',1)->get();
        return response()->json([
            'status' => 200,
            'userUpdate' => $userUpdate,
            'adminUpdate' => $adminUpdate,
            'message' => "Update User Successfully"
        ]);
    }

    public function deleteUser(Request $request){
        $userId = $request->input('userId');
        if($userId != null){
            $user = User::find($userId);
            $user->delete();
        }
        $userUpdate = DB::table('User')->where('role',0)->get();
        $adminUpdate = DB::table('User')->where('role',1)->get();
        return response()->json([
            'status' => 200,
            'userUpdate' => $userUpdate,
            'adminUpdate' => $adminUpdate,
            'message' => "Delete User Successfully"
        ]);
    }
    public function changePass(Request $request){
        $userId = $request->input('userId');
        $password = $request->input('password');

        $user = DB::table('User')
                ->where('userId',$userId)->first();

        if (Hash::check($password, $user->password)) {
            $user = User::where('userId', $userId)->first();

            $user->password = Hash::make($request->input('newPassword'));
            $user->update();

            $userResult = array(
                'userId' => $user->userId, 
                'email' => $user->email, 
                'fullname' => $user->fullname, 
                'profilePic' => $user->profilePic,
                'role' => $user->role
            );
            return response()->json([
                'status' => 200,
                'user' => $userResult,
                'message' => 'Your password has been changed',
            ]);
        } else {
            return response()->json([
                'status' => 100,
                'message' => 'Wrong password',
            ]);
        }
    }
}
