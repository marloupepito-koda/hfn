<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartProducts;
class CartProductsController extends Controller
{
   public function get_all_cart_product(){
         
         $cartProducts = CartProducts::where('client_id','157')->get();

          dd($cartProducts[0]);


          return response()->json([
          'status' => $cartProducts,
          ]);
     }

     public function get_seats($status='', $cat_id=null){
          if ($status == '') {
               $sqlm = ["active", "inactive"];
          } else {
               $sqlm = [$status];
          }

          $results = CartProducts::select('cart_products.*', 'cart_categories.category_name', 'venue_areas.name as venue_area', 'venue_sections.name as venue_section', 'cart_products.venue_row as venue_row', 'cart_products.venue_seat as venue_seat')
          ->leftJoin('venue_areas', 'venue_areas.venue_area_id', '=', 'cart_products.venue_area_id')
          ->leftJoin('venue_sections', 'venue_sections.venue_section_id', '=', 'cart_products.venue_section_id')
          ->leftJoin('cart_categories', 'cart_categories.cart_category_id', '=', 'cart_products.cart_category_id')
          ->where('cart_products.client_id', 157)
          ->where('cart_products.cart_category_id', 510)
          ->whereIn('cart_products.status', $sqlm)
          ->orderBy('cart_categories.sort_order', 'asc')
          ->orderBy('cart_products.sort_order', 'asc')
          ->get();

          dd($results);
     }

     public function tester(){
          return 'Hello world!';
     }

}
