<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
 
$response = Http::get('http://example.com');

class PokemonController extends Controller
{
    /* Get pokemon list */
    public function getPokemonList(Request $request)
    {
        $offset = $request->query('offset');
        $limit = $request->query('limit');
        $response = Http::withOptions([
            'verify' => false,
        ])->get('https://pokeapi.co/api/v2/pokemon?limit='.$limit.'&offset='.$offset);
        return $response->object(); 
    }

    /* Get pokemon details */
    public function getPokemonDetails(Request $request)
    {
        $Purl = $request->query('url');
        $response = Http::withOptions([
            'verify' => false,
        ])->get($Purl);
        return $response->object(); 
    }
}
