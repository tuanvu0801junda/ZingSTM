<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SongComment extends Model
{
    use HasFactory;
    protected $table = 'SongComment';
    protected $fillable = ['userComment', 'createdDate'];
    protected $primaryKey = 'songCommentId';
}
