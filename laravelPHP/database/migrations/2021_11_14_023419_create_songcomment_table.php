<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongcommentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('SongComment', function (Blueprint $table) {
            $table->bigInteger('userId');
            $table->bigInteger('songId');
            $table->foreign('userId')->references('userId')->on('User')->onDelete('cascade');
            $table->foreign('songId')->references('songId')->on('Song')->onDelete('cascade');
            $table->string('userComment');
            $table->timestamp('createdDate');
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
        Schema::dropIfExists('SongComment');
    }
}