<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('Login', 'UserController@Login');
Route::middleware('APIToken')->group(function () {
    Route::post('UserInsert', 'UserController@UserInsert');
    Route::post('UserUpdate', 'UserController@UserUpdate');

    Route::post('Register', 'UserController@Register');
    Route::get('UserList', 'UserController@UserList');
});
