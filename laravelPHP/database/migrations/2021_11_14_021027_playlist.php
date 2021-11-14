<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Playlist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Playlist', function (Blueprint $table) {
            $table->bigIncrements('playlistId')->primary();
            $table->timestamp('dateCreated');
            $table->string('playlistName');
            $table->bigInteger('userId');
            $table->foreign('userId')->references('userId')->on('User')->onDelete('cascade');
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
