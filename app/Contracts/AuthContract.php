<?php

namespace App\Contracts;

use App\Http\Resources\UserResource;
use Exception;

interface AuthContract
{

    /**
     * @param array $credentials
     * @return string
     * @throws Exception
     */
    public function login(array $credentials);

    /**
     * @return UserResource
     */
    public function user();

    /**
     * @return void
     * @throws Exception
     */
    public function logout();

}