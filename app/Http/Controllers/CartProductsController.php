<?php

namespace App\Http\Controllers;

use DateTime;
use Illuminate\Http\Request;
use App\Models\CartProducts;
use App\Models\CartOrders;

class CartProductsController extends Controller
{

     public $client_id = 157;
     public $cart_category_id = 510;
     public $event_id = 302;
     public $order_type = "HFN POS";
     public $cart_customer_id = 0;
     
     public function get_seats($status = '', $cat_id = null)
     {


          if ($status == '') {
               $sqlm = ["active", "inactive"];
          } else {
               $sqlm = [$status];
          }

          $results = CartProducts::select('cart_products.*', 'cart_categories.category_name', 'venue_areas.name as venue_area', 'venue_sections.name as venue_section', 'cart_products.venue_row as venue_row', 'cart_products.venue_seat as venue_seat')
               ->leftJoin('venue_areas', 'venue_areas.venue_area_id', '=', 'cart_products.venue_area_id')
               ->leftJoin('venue_sections', 'venue_sections.venue_section_id', '=', 'cart_products.venue_section_id')
               ->leftJoin('cart_categories', 'cart_categories.cart_category_id', '=', 'cart_products.cart_category_id')
               ->where('cart_products.client_id', $this->client_id)
               ->where('cart_products.cart_category_id', $this->cart_category_id)
               ->whereIn('cart_products.status', $sqlm)
               ->orderBy('cart_categories.sort_order', 'asc')
               ->orderBy('cart_products.sort_order', 'asc')
               ->get();

          return response()->json([
               'status' => $results,
          ]);
     }

     public function create_checkout(Request $request)
     {

          for ($i = 0; $i < count($request->data); $i++) {
                    
               if ($request->data[$i]['product_name'] !== 'General Admission No Seat') {

                    // $price_offset = 0;

                    //  if ($request->data[$i]['price_early'] && !$request->data[$i]['price_early_ended']) {
                    //      $price_offset = max(0, ($request->data[$i]['price_list'] - $request->data[$i]['price_early'] ));
                    // }


                    //   function generateRandomString()
                    //      {
                    //           $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    //           $randomString = '';
                    //           for ($i = 0; $i < 32; $i++) {
                    //                $randomString .= $characters[rand(0, strlen($characters) - 1)];
                    //           }
                    //           return $randomString;
                    //      }
                    // $token_try = generateRandomString();

                    CartProducts::where('cart_product_id', $request->data[$i]['cart_product_id'])
                         ->update([
                              'quantity' => 0
                         ]);

                         //   CartOrderedProducts::create([
                         //      'client_id' => $this->client_id,
                         //      'cart_product_id' =>  $request->data[$i]['cart_product_id'],
                         //      'token' => $token_try,
                         //      'cart_order_id' => $_SESSION['cart_order_id'],
                         //      'quantity' => $request->data[$i]['quantity'],
                         //      'price' => $request->data[$i]['price_list'],
                         //      'price_offset' => $price_offset,
                         //      // 'code' => $code,
                         //      // 'cart_product_options' => $option_id,
                         //      // 'expires' => date('Y-m-d H:i:s', $expiration),
                         //      // 'date_submitted' => \Carbon\Carbon::now(),
                         // ]);
               }

          }


          if (session('session') === null) {

           
             
             

               $datetime = new DateTime($request->date);
               $datetime->modify('+2 minutes');
               session(['session' => $datetime->format('Y-m-d H:i:s')]);
          }


          session(['create_checkout' => $request->data]);
          return response()->json([
               'status' => session('create_checkout'),
          ]);

     }


     public function session(Request $request)
     {
          return response()->json([
               'status' => session('session'),
               'checkout' => session('create_checkout'),
          ]);
     }

     public function end_session(Request $request)
     {

          $data = session('create_checkout');
          $checkoutToken = session('checkout_token');

          for ($i = 0; $i < count($data); $i++) {
               if ($data[$i]['product_name'] !== 'General Admission No Seat') {
                    CartProducts::where('cart_product_id', $data[$i]['cart_product_id'])
                         ->update([
                              'quantity' => 1
                         ]);
               }
          }

          // CartOrders::where('token',$checkoutToken)-update([
          //      'status' =>'cancelled'
          // ]);
          session()->forget('session');
          session()->forget('create_checkout');
          return response()->json([
               'status' => 'success',
          ]);
     }



}