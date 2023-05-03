<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartOrderedProductsController extends Controller
{
     public function get_all_seats(){
         

          return response()->json([
          'status' => 'hello',
          ]);
     }

}
