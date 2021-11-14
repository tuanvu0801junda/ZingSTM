<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $table = 'User';
    protected $fillable = ['email', 'fullname', 'password', 'profilePic', 'role', 'username'];
}
