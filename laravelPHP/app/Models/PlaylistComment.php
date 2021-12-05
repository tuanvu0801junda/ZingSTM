<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaylistComment extends Model
{
    use HasFactory;

    protected $table = 'PlaylistComment';
    protected $fillable = [
        'userId',
        'playlistId',
        'userComment',
        'createdDate',
    ];
    protected $primaryKey = 'playlistCommentId';
}