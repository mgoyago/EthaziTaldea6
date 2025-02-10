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
        Schema::create('historialas', function (Blueprint $table) {
            $table->id();
            $table->integer('id_jokalaria');
            $table->integer('id_taldea');
            $table->date('hasiera_data');
            $table->date('bukaera_data');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historialas');
    }
};
