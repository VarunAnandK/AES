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
Route::get('Decrypt/{id}', 'UserController@PasswordDecrypt');

Route::middleware('APIToken')->group(function () {
    Route::get('UserRoleList', 'UserRoleController@UserRoleList');
    Route::post('UserRoleInsert', 'UserRoleController@UserRoleInsert');
    Route::post('UserRoleUpdate', 'UserRoleController@UserRoleUpdate');

    Route::post('UserInsert', 'UserController@UserInsert');
    Route::post('UserUpdate', 'UserController@UserUpdate');

    Route::get('CompanyList', 'CompanyController@CompanyList');
    Route::get('CompanyById/{Id}', 'CompanyController@CompanyById');
    Route::post('CompanyInsert', 'CompanyController@CompanyInsert');
    Route::post('CompanyUpdate', 'CompanyController@CompanyUpdate');

    Route::post('Register', 'UserController@Register');
    Route::get('UserList', 'UserController@UserList');
});
