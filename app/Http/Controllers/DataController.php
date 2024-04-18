<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Customer;

/**
 * @OA\Tag(
 *     name="Data",
 *     description="Operations related to data"
 * )
 * @OA\Info(
 *     title="API de Dados",
 *     version="1.0.0",
 *     description="API para acessar dados de produtos, vendas e clientes."
 * )
 */
class DataController extends Controller
{
    /**
     * Get all products.
     *
     * @OA\Get(
     *     path="/api/products",
     *     tags={"Data"},
     *     summary="Get all products",
     *     description="Returns all products.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     )
     * )
     */
    public function getAllProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Get all sales.
     *
     * @OA\Get(
     *     path="/api/sales",
     *     tags={"Data"},
     *     summary="Get all sales",
     *     description="Returns all sales.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Sale")
     *         )
     *     )
     * )
     */
    public function getAllSales()
    {
        $sales = Sale::all();
        return response()->json($sales);
    }

    /**
     * Get all customers.
     *
     * @OA\Get(
     *     path="/api/customers",
     *     tags={"Data"},
     *     summary="Get all customers",
     *     description="Returns all customers.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Customer")
     *         )
     *     )
     * )
     */
    public function getAllCustomers()
    {
        $customers = Customer::all();
        return response()->json($customers);
    }
}
