<?php

use Illuminate\Database\Seeder;

class UserRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_role')->insert([
            'id' => '1',
            'name' => "sadmin",
            'created_by_id' => '1',
            'status' => '1'
        ]);
    }
}
