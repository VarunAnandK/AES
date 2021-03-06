<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->BaseEntity();
            $table->string("name")->unique()->index();
            $table->string("email")->unique()->index();
            $table->text("password");
            $table->bigInteger("user_role_id")->unsigned();
            $table->foreign("user_role_id")->references("id")->on("user_role")->onDelete("restrict");
            $table->text("api_token")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
}
