<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model{
    use HasFactory;

    protected $table = 'Artist';

    protected $fillable = ['artistId','artistName'];

    protected $primaryKey = 'artistId';
}
