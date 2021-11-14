<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongArtistRelationTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('SongArtistRelation', function (Blueprint $table) {
            $table->bigInteger('songId')->unsigned();
            $table->bigInteger('artistId')->unsigned();
            $table->foreign('songId')->references('songId')->on('Song')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('artistId')->references('artistId')->on('Artist')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('SongArtistRelation');
    }
}
