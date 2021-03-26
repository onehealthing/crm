<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;
use Laravel\Passport\RefreshTokenRepository;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Exception;

class LaravelPassportService
{

    /**
     * @var Client
     */
    private $http;

    /**
     * @var RefreshTokenRepository
     */
    private $refreshToken;

    /**
     * LaravelPassportService constructor.
     * @param Client $http
     * @param RefreshTokenRepository $refreshToken
     */
    public function __construct(Client $http, RefreshTokenRepository $refreshToken)
    {
        $this->http = $http;
        $this->refreshToken = $refreshToken;
    }

    /**
     * @param array $credentials
     * @return string
     * @throws Exception
     */
    public function attempt(array $credentials)
    {
        try {
            $response = $this->http->post('http://webserver/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.laravel_passport.client_id'),
                    'client_secret' => config('services.laravel_passport.client_secret'),
                    'username' => $credentials['login'],
                    'password' => $credentials['password'],
                    'scope' => '',
                ],
            ]);

            return json_decode((string)$response->getBody(), true)['access_token'];
        } catch (GuzzleException $e) {
            if (
                $e->getCode() === JsonResponse::HTTP_BAD_REQUEST ||
                $e->getCode() === JsonResponse::HTTP_UNAUTHORIZED
            ) {
                throw new Exception(
                    trans('auth.failed'),
                    JsonResponse::HTTP_UNAUTHORIZED
                );
            }

            throw new Exception(
                'Server error.',
                JsonResponse::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * @param string $accessTokenId
     * @return void
     */
    public function revokeRefreshTokens(string $accessTokenId)
    {
        $this->refreshToken->revokeRefreshTokensByAccessTokenId($accessTokenId);
    }

}