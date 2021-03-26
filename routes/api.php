<?php

use Illuminate\Support\Facades\Route;

Route::prefix('v1')->namespace('API')->group(function () {

    Route::prefix('auth')->group(function () {
        Route::middleware('guest')->group(function () {
            Route::post('login', 'AuthController@login');
        });

        Route::middleware('auth:api')->group(function () {
            Route::get('user', 'AuthController@user');
            Route::post('logout', 'AuthController@logout');
        });
    });

    Route::middleware('auth:api')->group(function () {
        Route::get('companies/{id}/clients', 'CompanyController@clients');
        Route::get('clients/{id}/companies', 'ClientController@companies');

        Route::apiResources([
            'companies' => 'CompanyController',
            'clients' => 'ClientController',
        ]);
    });

});