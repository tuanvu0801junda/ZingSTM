<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListenHistory extends Model{
    use HasFactory;
    protected $table = 'ListenHistory';
    protected $fillable = ['songId', 'listenDate'];
    //protected $primaryKey = 'albumId';
}
