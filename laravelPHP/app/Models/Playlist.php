<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;

    protected $table = 'Playlist';
    protected $fillable = [
        'playlistId',
        'dateCreated',
        'playlistName',
        'userId',
    ];
    protected $primaryKey = 'playlistId';
}