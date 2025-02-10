<?php

namespace App\Services;

use GuzzleHttp\Client;

class EsportsApiService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => env('ESPORTS_API_URL', 'https://api.esportsearnings.com/v0'), // Base URI de la API
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);
    }

    public function lookupPlayerById($playerId)
    {
        $response = $this->client->get('/LookupPlayerById', [
            'query' => [
                'apikey' => env('ESPORTS_API_KEY'),
                'playerid' => $playerId,
            ],
        ]);

        return json_decode($response->getBody(), true); // Decodifica JSON en array
    }
}
