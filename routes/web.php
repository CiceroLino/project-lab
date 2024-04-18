<?php

use App\Http\Controllers\DataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/products', function () {
    return Inertia::render('Products/Index');
})->name('products.index');

Route::get('/sales', function () {
    return Inertia::render('Sales/Index');
})->name('sales.index');

Route::get('/customers', function () {
    return Inertia::render('Customers/Index');
})->name('customers.index');
