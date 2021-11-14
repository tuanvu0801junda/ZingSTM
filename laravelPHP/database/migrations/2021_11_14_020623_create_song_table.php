<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('Song', function (Blueprint $table) {
            $table->bigIncrements('songId')->primary();
            $table->bigInteger('albumId');
            $table->string('imagePath');
            $table->string('songPath');
            $table->bigInteger('playTimes')->default(0);
            $table->string('title');
            $table->string('duration');
            $table->foreign('albumId')->references('albumId')->on('Album');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('Song');
    }
}
