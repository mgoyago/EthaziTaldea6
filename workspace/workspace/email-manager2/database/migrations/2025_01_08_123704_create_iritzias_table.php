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
        Schema::create('iritzias', function (Blueprint $table) {
            $table->id();
            $table->integer('id_user');
            $table->integer('id_partida');
            $table->string('iruzkina');
            $table->date('iritzi_data');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iritzias');
    }
};
