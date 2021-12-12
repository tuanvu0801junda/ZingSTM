<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListenHistory extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('ListenHistory', function (Blueprint $table) {
            $table->bigInteger('songId')->unsigned();
            $table->timestamp('listenDate');
            $table->foreign('songId')->references('songId')->on('Song')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('ListenHistory');
    }
}
