<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartProducts;
use Illuminate\Support\Facades\DB;

class CartProductsController extends Controller
{
   public function get_all_cart_product(){
         
     //     $cartProducts = CartProducts::where('client_id','157')->get();


          $cartProducts = DB::table('cart_products as cp')
          ->select('cp.*', 'cc.category_name', 'va.name AS venue_area', 'vs.name AS venue_section', 'cp.venue_row AS venue_row', 'cp.venue_seat AS venue_seat')
          ->leftJoin('venue_areas as va', 'va.venue_area_id', '=', 'cp.venue_area_id')
          ->leftJoin('venue_sections as vs', 'vs.venue_section_id', '=', 'cp.venue_section_id')
          ->leftJoin('cart_categories as cc', 'cc.cart_category_id', '=', 'cp.cart_category_id')
          ->where('cp.client_id', '=', '157')
          ->orderBy('cc.sort_order', 'asc')
          ->orderBy('cp.sort_order', 'asc')
          ->get();
          return response()->json([
          'status' => $cartProducts,
          ]);
     }

}
