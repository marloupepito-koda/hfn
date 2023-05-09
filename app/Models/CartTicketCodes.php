<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartTicketCodes extends Model
{
    use HasFactory;
    protected $table = 'cart_ticket_codes';

    protected $fillable = [
        'cart_ticket_code_id',
        'cart_ordered_product_id',
        'product_id',
        'code',
        'token',
        'status',
        'date_redeemed'
    ];
}