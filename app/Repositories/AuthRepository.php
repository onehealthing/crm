<?php

namespace App\Repositories;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Services\LaravelPassportService;
use App\Http\Resources\UserResource;
use App\Contracts\AuthContract;
use App\Models\User;
use Exception;

class AuthRepository implements AuthContract
{

    /**
     * @var LaravelPassportService
     */
    private $passport;

    /**
     * @var Authenticatable|User
     */
    private $user;

    /**
     * AuthRepository constructor.
     * @param LaravelPassportService $passport
     */
    public function __construct(LaravelPassportService $passport)
    {
        $this->passport = $passport;
        $this->user = auth()->user();
    }

    /**
     * @inheritDoc
     */
    public function login(array $credentials)
    {
        return $this->passport->attempt($credentials);
    }

    /**
     * @inheritDoc
     */
    public function user()
    {
        return UserResource::make($this->user);
    }

    /**
     * @inheritDoc
     */
    public function logout()
    {
        try {
            DB::beginTransaction();

            $this->passport->revokeRefreshTokens($this->user->getAccessTokenId());
            $this->user->deleteAccessTokens();

            DB::commit();
        } catch (Exception $e) {

            DB::rollBack();

            throw new Exception(
                'Server error.',
                JsonResponse::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

}