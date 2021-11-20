<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;
    protected $table = 'Genre';
    protected $fillable = ['genreId', 'genreImage', 'genreName'];
    public $timestamps = false;
    protected $primaryKey = 'genreId';
}
