<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartOrderedProductsController extends Controller
{
     public function send_place_orders(Request $request)
     {
          function generateRandomString()
          {
               $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
               $randomString = '';
               for ($i = 0; $i < 32; $i++) {
                    $randomString .= $characters[rand(0, strlen($characters) - 1)];
               }
               return $randomString;
          }
          $randomString = generateRandomString();



          $data = session('create_checkout');
          return response()->json([
               'status' => $randomString,
          ]);
     }

}