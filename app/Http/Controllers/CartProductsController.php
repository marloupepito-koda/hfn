<?php

namespace App\Http\Controllers;
use DateTime;
use Illuminate\Http\Request;
use App\Models\CartProducts;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class CartProductsController extends Controller
{
   public function get_all_cart_product(){
     
     }

     public function get_seats($status='', $cat_id=null){
          $client_id = 157;
          $cart_category_id = 510;
          if ($status == '') {
               $sqlm = ["active", "inactive"];
          } else {
               $sqlm = [$status];
          }

          $results = CartProducts::select('cart_products.*', 'cart_categories.category_name', 'venue_areas.name as venue_area', 'venue_sections.name as venue_section', 'cart_products.venue_row as venue_row', 'cart_products.venue_seat as venue_seat')
          ->leftJoin('venue_areas', 'venue_areas.venue_area_id', '=', 'cart_products.venue_area_id')
          ->leftJoin('venue_sections', 'venue_sections.venue_section_id', '=', 'cart_products.venue_section_id')
          ->leftJoin('cart_categories', 'cart_categories.cart_category_id', '=', 'cart_products.cart_category_id')
          ->where('cart_products.client_id', $client_id)
          ->where('cart_products.cart_category_id', $cart_category_id)
          ->whereIn('cart_products.status', $sqlm)
          ->orderBy('cart_categories.sort_order', 'asc')
          ->orderBy('cart_products.sort_order', 'asc')
          ->get();

          return response()->json([
          'status' => $results,
          ]);
     }

     public function create_checkout(Request $request){

          for ($i=0; $i < count($request->data); $i++) { 
               
               if($request->data[$i]['product_name'] !== 'General Admission No Seat'){
                    CartProducts::where('cart_product_id',$request->data[$i]['cart_product_id'])
                    ->update([
                         'quantity' => 0
                    ]);
               }
              
          }


          if(session('session') === null){
                   $datetime = new DateTime($request->date);
                   $datetime->modify('+9 minutes');
                  session(['session' => $datetime->format('Y-m-d H:i:s')]);
          }
          
        
          session(['create_checkout' => $request->data]);
          return response()->json([
          'status' => session('create_checkout'),
          ]);
         
     }


      public function session(Request $request){
           return response()->json([
           'status' => session('session'),
           'checkout' => session('create_checkout'),
          ]);
      }

       public function end_session(Request $request){
          session()->forget('session');
           session()->forget('create_checkout');
            return response()->json([
           'status' => 'success',
          ]);
      }



}
