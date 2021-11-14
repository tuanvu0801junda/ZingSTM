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
            $table->bigIncrements('songId');
            $table->bigInteger('albumId')->unsigned()->nullable();
            $table->string('imagePath');
            $table->string('songPath');
            $table->bigInteger('playTimes')->default(0);
            $table->string('title');
            $table->string('duration');
            $table->foreign('albumId')->references('albumId')->on('Album')->onDelete('cascade')->onUpdate('cascade');
            //Note this one
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
