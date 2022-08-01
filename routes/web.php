<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokemonController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get/pokemon/list', [PokemonController::class,'getPokemonList'])->name('Pokedex');
Route::get('/get/pokemon/details', [PokemonController::class,'getPokemonDetails'])->name('PokemonDetails');
