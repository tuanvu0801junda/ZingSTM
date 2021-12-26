<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditPlaylistCommentTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::table('PlaylistComment', function(Blueprint $table){
            $table->bigIncrements('playlistCommentId');
        });
    }
}
