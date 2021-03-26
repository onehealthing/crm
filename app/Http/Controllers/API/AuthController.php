<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use App\Contracts\AuthContract;
use Illuminate\Http\JsonResponse;
use Exception;

class AuthController extends Controller
{

    /**
     * @var AuthContract
     */
    private $auth;

    /**
     * AuthController constructor.
     * @param AuthContract $auth
     */
    public function __construct(AuthContract $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @param LoginRequest $request
     * @return JsonResponse
     * @throws Exception
     */
    public function login(LoginRequest $request)
    {
        $token = $this->auth->login($request->validated());

        return response()->json(['access_token' => $token]);
    }

    /**
     * @return JsonResponse
     */
    public function user()
    {
        return response()->json($this->auth->user());
    }

    /**
     * @return JsonResponse
     * @throws Exception
     */
    public function logout()
    {
        $this->auth->logout();

        return response()->json(['message' => 'Logout successfully.']);
    }

}
