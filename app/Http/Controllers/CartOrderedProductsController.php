<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartOrderedProducts;

class CartOrderedProductsController extends Controller
{
     public function send_place_orders(Request $request)
     {
          $cartOrderProducts = new CartOrderedProducts;
          function generateRandomString()
          {
               $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
               $randomString = '';
               for ($i = 0; $i < 32; $i++) {
                    $randomString .= $characters[rand(0, strlen($characters) - 1)];
               }
               return $randomString;
          }
          $randomToken = generateRandomString();

          $aa = $cartOrderProducts->checkOutSeats($request,$randomToken);
          $data = session('create_checkout');
          return response()->json([
               'status' => $aa,
          ]);
     }

}