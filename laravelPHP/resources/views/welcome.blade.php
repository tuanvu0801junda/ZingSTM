<?php
    namespace resources\views\welcome;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\DB;
    use App\Models\User;
    function getUserInfo1(){
            $userId = 2;
            $user = DB::table('User')
                    ->where('userId',$userId)->first();
                return $user->username;
        }
        echo "hi ";
        $name = getUserInfo1();
        echo $name;
        
        
        ?>
        
