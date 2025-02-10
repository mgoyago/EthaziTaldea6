<?php
// database/migrations/xxxx_xx_xx_create_saved_news_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavedNewsTable extends Migration
{
    public function up()
    {
        Schema::create('saved_news', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->json('news_data');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('saved_news');
    }
}

