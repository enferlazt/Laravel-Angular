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

Route::get('/', function () {
    return view('welcome');
});

Route::put('add', 'carController@add');

Route::get('all', 'carController@all');

Route::delete('delete', 'carController@delete');

Route::get('singular', 'carController@singular');

Route::put('update', 'carController@update');
