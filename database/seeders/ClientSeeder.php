<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{

    const AMOUNT = 50;

    /**
     * @return void
     */
    public function run()
    {
        Client::factory()
            ->count(self::AMOUNT)
            ->hasCompanies(3)
            ->create();
    }

}
