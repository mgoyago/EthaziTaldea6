<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jokuas', function (Blueprint $table) {
            $table->id();
            $table->string('joku_izena');
            $table->string('generoa');
            $table->string('garatzailea');
            $table->date('kaleratze_data');
            $table->string('deskripzioa');
            $table->string('logoa');
            $table->string ('bertsioa');
            $table->date('last_update');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jokuas');
    }
};
