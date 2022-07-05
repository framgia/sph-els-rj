<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{

    protected $faker;

    public function __construct()
    {
        $this->faker = Container::getInstance()->make(Generator::class);
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email'=> $this->faker->safeEmail(),
            'password'=> Hash::make('password'),
            'avatar' => $this->faker->image('public/storage/images',400,300),
            'is_admin'=> $this->faker->boolean()
        ]);
    }
}
