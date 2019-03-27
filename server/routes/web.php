<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('add', 'taskController@add');

Route::get('get', 'taskController@get');

Route::post('delete', 'taskController@delete');

Route::post('singular', 'taskController@getone');
