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
        Schema::create('lehiaketas', function (Blueprint $table) {
            $table->id();
            $table->string('lehiaketa_izena');
            $table->integer('id_jokoa');
            $table->date('hasiera_data');
            $table->date('bukaera_data');
            $table->integer('saria');
            $table->decimal('latitudea',9,6);
            $table->decimal('longitudea',9,6);
            $table->string('deskribapena');
            $table->string('egoera');
            $table->string('egungo_fasea');
            $table->string('taldeak');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lehiaketas');
    }
};
