<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartOrderedProducts extends Model
{
    use HasFactory;
    protected $table = 'cart_ordered_products';
    protected $fillable = [
        'cart_ordered_product_id',
        'client_id',
        'cart_product_id',
        'token',
        'cart_order_id',
        'quantity',
        'price',
        'price_group',
        'price_offset',
        'code',
        'discount_offset',
        'cart_product_options',
        'cart_coupon_id',
        'date_submitted',
        'team_members',
        'units',
        'donation',
        'printed_fee',
        'printed_fee_type',
        'first_name',
        'last_name',
        'expires',
        'table_number'
    ];
}