<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PlaylistSongRelation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('PlaylistSongRelation', function (Blueprint $table) {
            $table->bigInteger('playlistId');
            $table->foreign('playlistId')->references('playlistId')->on('Playlist')->onDelete('cascade');
            $table->bigInteger('songId');
            $table->foreign('songId')->references('songId')->on('Song')->onDelete('cascade');
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
