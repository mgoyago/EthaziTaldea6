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
        Schema::create('jokalarias', function (Blueprint $table) {
            $table->id();
            $table->string('jokalari_izena');
            $table->string('nickname');
            $table->date('jaiotze_data');
            $table->string('nazionalitatea');
            $table->string('rol');
            $table->integer('id_egungotaldea');
            $table->date('sartze_data');
            $table->string('argazkia');
            $table->integer('id_jokua');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jokalarias');
    }
};
