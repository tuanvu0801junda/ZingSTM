<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSharePlayListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('SharePlaylist', function (Blueprint $table) {
            $table->bigInteger('userId')->unsigned();
            $table->bigInteger('playlistId')->unsigned();

            $table->foreign('userId')->references('userId')->on('User')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('playlistId')->references('playlistId')->on('Playlist')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('SharePlaylist');
    }
}
