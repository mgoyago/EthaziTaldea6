<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('trivial', function (Blueprint $table) {
            $table->id();
            $table->string('game', 50);
            $table->text('question');
            $table->string('option_a', 255);
            $table->string('option_b', 255);
            $table->string('option_c', 255);
            $table->string('correct_answer', 255);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('trivial');
    }
};
