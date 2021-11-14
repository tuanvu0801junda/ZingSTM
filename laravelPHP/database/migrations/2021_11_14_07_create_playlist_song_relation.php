<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaylistSongRelation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('PlaylistSongRelation', function (Blueprint $table) {
            $table->bigInteger('playlistId')->unsigned();
            $table->foreign('playlistId')->references('playlistId')->on('Playlist')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('songId')->unsigned();
            $table->foreign('songId')->references('songId')->on('Song')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('playlistOrder');
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
        Schema::dropIfExists('PlaylistSongRelation');
    }
}
