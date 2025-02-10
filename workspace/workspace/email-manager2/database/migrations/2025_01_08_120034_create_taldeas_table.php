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
        Schema::create('taldeas', function (Blueprint $table) {
            $table->id();
            $table->string('talde_izena');
            $table->string('siglak');
            $table->string('logoa');
            $table->string('herrialdea');
            $table->date('sorrera');
            $table->integer('id_entrenatzailea');
            $table->integer('id_kapitaina');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('taldeas');
    }
};
