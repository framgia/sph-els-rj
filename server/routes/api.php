<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\UserController;

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



Route::group(['middleware' => 'auth:sanctum'], function () {
  Route::post('v1/logout', [LogoutController::class, 'index']);
  Route::get('v1/users', [UserController::class, 'index']);
});

Route::post('v1/register', [RegisterController::class, 'register']);


Route::post('v1/login', [LoginController::class, 'index']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});
