<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartOrderedProducts;

class CartOrderedProductsController extends Controller
{
      public $client_id = 157;
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
          $token = generateRandomString();

          // $aa = $cartOrderProducts->checkOutSeats($request,$randomToken);

          $data= session('create_checkout');
             for ($i=0; $i < count($data); $i++) { 
                         $price_offset = 0;
                              if ($data[$i]['price_early'] && !$data[$i]['price_early_ended']) {
                                   $price_offset = max(0, ($data[$i]['price_list'] - $data[$i]['price_early']));
                              }


                            $code = mt_rand(1000000000, 9999999999);
                         if($data[$i]['cart_product_id'] !== 'no seats'){
                              CartOrderedProducts::create([
                              'client_id' => $this->client_id,
                              'cart_product_id' => $data[$i]['cart_product_id'],
                              'token' => $token, 
                              // 'cart_order_id' => 81415,
                              'quantity' => $data[$i]['quantity'], 
                              'price' => $data[$i]['price_list'], 
                              'price_group' => 0,
                              'price_offset' => $price_offset,
                              'code' => $code, 
                              'discount_offset' => 0.00,
                              'cart_product_options' => 0, 
                              'cart_coupon_id' => 0,
                              'date_submitted' => '2023-05-08 23:31:32',
                              'team_members' => null,
                              'units' => 0,
                              'donation' => 0.00,
                              'printed_fee' => 0,
                              'printed_fee_type' => 0,
                              'first_name' => $request->fullname,
                              'last_name' => 'waaaa',
                              'expires' => '2023-05-08 23:42:35',
                              'table_number' => 0,
                              ]);
                         }else{
                       $code = mt_rand(1000000000, 9999999999);
                               CartOrderedProducts::create([
                              'client_id' => $this->client_id,
                              'cart_product_id' => 0000,
                              'token' => $token, 
                              // 'cart_order_id' => 81415,
                              'quantity' => $data[$i]['quantity'], 
                              'price' => $data[$i]['price_list'], 
                              'price_group' => 0,
                              'price_offset' => $price_offset,
                              'code' => $code, 
                              'discount_offset' => 0.00,
                              'cart_product_options' => 0, 
                              'cart_coupon_id' => 0,
                              'date_submitted' => '2023-05-08 23:31:32',
                              'team_members' => null,
                              'units' => 0,
                              'donation' => 0.00,
                              'printed_fee' => 0,
                              'printed_fee_type' => 0,
                              'first_name' => $request->fullname,
                              'last_name' => 'waaaa',
                              'expires' => '2023-05-08 23:42:35',
                              'table_number' => 0,
                              ]);
                         }
        }


          session()->forget('session');
          session()->forget('create_checkout');
         
          return response()->json([
               'status' =>'success',
          ]);
     }

}