<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{

    const AMOUNT = 50;

    /**
     * @return void
     */
    public function run()
    {
        Company::factory()
            ->count(self::AMOUNT)
            ->hasClients(3)
            ->create();
    }
}
