<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaylistSongRelation extends Model
{
    use HasFactory;

    protected $table = 'PlaylistSongRelation';
    protected $fillable = [
        'playlistId',
        'songId',
        'playlistOrder',
    ];
}