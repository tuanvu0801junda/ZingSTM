<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model{
    use HasFactory;

    protected $table = 'Song';

    protected $fillable = ['albumId','imagePath','songPath','playTimes','title','duration'];
}
