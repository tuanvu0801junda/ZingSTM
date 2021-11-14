<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PlaylistComment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('PlaylistComment', function (Blueprint $table) {
            $table->bigInteger('userId');
            $table->foreign('userId')->references('userId')->on('User')->onDelete('cascade');
            $table->bigInteger('playlistId');
            $table->foreign('playlistId')->references('playlistId')->on('Playlist')->onDelete('cascade');
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
        Schema::dropIfExists('PlaylistComment');
    }
}
