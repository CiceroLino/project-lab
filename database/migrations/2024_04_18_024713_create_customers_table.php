<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->customer_id();
            $table->age();
            $table->gender();
            $table->item_purchased();
            $table->category();
            $table->purchase_amount_usd();
            $table->location();
            $table->size();
            $table->color();
            $table->season();
            $table->review_rating();
            $table->subscription_status();
            $table->shipping_type();
            $table->discount_applied();
            $table->promo_code_used();
            $table->previous_purchases();
            $table->payment_method();
            $table->frequency_of_purchases();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
