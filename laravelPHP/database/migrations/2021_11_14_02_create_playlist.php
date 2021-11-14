<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaylist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Playlist', function (Blueprint $table) {
            $table->bigIncrements('playlistId');
            $table->timestamp('dateCreated');
            $table->string('playlistName');
            $table->bigInteger('userId')->unsigned();
            $table->foreign('userId')->references('userId')->on('User')->onDelete('cascade')->onUpdate('cascade');
            $table->string('verifyCode')->nullable();
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
        Schema::dropIfExists('Playlist');
    }
}
