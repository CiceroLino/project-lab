<?php

use App\Http\Controllers\DataController;

Route::get('/products', [DataController::class, 'getAllProducts']);
Route::get('/sales', [DataController::class, 'getAllSales']);
Route::get('/customers', [DataController::class, 'getAllCustomers']);
