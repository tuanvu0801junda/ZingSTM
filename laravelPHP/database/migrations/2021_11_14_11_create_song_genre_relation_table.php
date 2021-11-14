<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongGenreRelationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('SongGenreRelation', function (Blueprint $table) {
            $table->bigInteger('songId')->unsigned();
            $table->bigInteger('genreId')->unsigned();
            $table->foreign('songId')->references('songId')->on('Song')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('genreId')->references('genreId')->on('Genre')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('SongGenreRelation');
    }
}
