<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SharePlaylist extends Model
{
    use HasFactory;
    protected $table = 'SharePlaylist';
    protected $fillable = ['userId','playlistId'];
}
