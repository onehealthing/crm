<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class BindServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->when(\App\Http\Controllers\API\AuthController::class)
            ->needs(\App\Contracts\AuthContract::class)
            ->give(function () {
                return new \App\Repositories\AuthRepository(
                    new \App\Services\LaravelPassportService(
                        new \GuzzleHttp\Client(),
                        new \Laravel\Passport\RefreshTokenRepository()
                    )
                );
            });

        $this->app->when(\App\Http\Controllers\API\CompanyController::class)
            ->needs(\App\Contracts\CRUDContract::class)
            ->give(function () {
                return new \App\Repositories\CompanyRepository(
                    new \App\Models\Company()
                );
            });

        $this->app->when(\App\Http\Controllers\API\CompanyController::class)
            ->needs(\App\Contracts\CompanyContract::class)
            ->give(function () {
                return new \App\Repositories\CompanyRepository(
                    new \App\Models\Company()
                );
            });

        $this->app->when(\App\Http\Controllers\API\ClientController::class)
            ->needs(\App\Contracts\CRUDContract::class)
            ->give(function () {
                return new \App\Repositories\ClientRepository(
                    new \App\Models\Client()
                );
            });

        $this->app->when(\App\Http\Controllers\API\ClientController::class)
            ->needs(\App\Contracts\ClientContract::class)
            ->give(function () {
                return new \App\Repositories\ClientRepository(
                    new \App\Models\Client()
                );
            });

    }
}
