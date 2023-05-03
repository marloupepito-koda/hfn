<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartProducts;
class CartProductsController extends Controller
{
   public function get_all_cart_product(){
         
         $cartProducts = CartProducts::where('client_id','157')->get();
          return response()->json([
          'status' => $cartProducts,
          ]);
     }

}
