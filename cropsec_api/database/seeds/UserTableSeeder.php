<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->insert([
            'id' => '1',
            'name' => "sadmin",
            'user_role_id' => 1,
            'password' => Crypt::encrypt('123'),
            'email' => 'sadmin@gmail.com',
            'created_by_id' => '1',
            'status' => '1'
        ]);
    }
}
