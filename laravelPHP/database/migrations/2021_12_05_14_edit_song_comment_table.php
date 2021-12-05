<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditSongCommentTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::table('SongComment', function(Blueprint $table){
            $table->bigIncrements('songCommentId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::table('SongComment', function(Blueprint $table){
            $table->dropColumn('songCommentId');
        });
    }
}
