<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{

    const AMOUNT = 10;

    /**
     * @return void
     */
    public function run()
    {
        User::factory(self::AMOUNT)->create();
    }
}
