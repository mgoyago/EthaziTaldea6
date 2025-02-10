<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


use App\Http\Controllers\EmailaController;

Route::post('/send-email', [EmailaController::class, 'sendEmail']);

use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/datuak', [AuthController::class, 'datuak']);
Route::middleware('auth:sanctum')->post('/users/add-points', [AuthController::class, 'addPoints']);
Route::middleware('auth:sanctum')->post('/users/buy', [AuthController::class, 'losePoints']);

use App\Http\Controllers\Api\EsportsController;

Route::get('/topLeagues', [EsportsController::class, 'getTopLeagues']);
Route::post('/tournaments', [EsportsController::class, 'getTournamentsByClass']);
Route::post('/matches', [EsportsController::class, 'getSeriesMatches']);
Route::get('/leagues/{classId}', [EsportsController::class, 'getLeagueIdData']);
Route::get('/matches/{classId}', [EsportsController::class, 'getMatchPlayers']);
Route::post('/matches/past', [EsportsController::class, 'getSeriesPastMatches']);

use App\Http\Controllers\Api\ApiNewsController;

Route::get('/news', [ApiNewsController::class, 'getGamingAndEsportsNews']);

use App\Http\Controllers\TrivialController;
Route::get('/trivialRandom', [TrivialController::class, 'getRandomQuestions']);
Route::post('/trivial', [TrivialController::class, 'create']);
Route::delete('/trivial/{id}', [TrivialController::class, 'destroy']);
