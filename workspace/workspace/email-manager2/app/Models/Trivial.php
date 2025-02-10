<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trivial extends Model
{
    protected $table = 'trivial';
    protected $fillable = [
        'game', 'question', 'option_a', 'option_b', 'option_c', 'correct_answer'
    ];
}
