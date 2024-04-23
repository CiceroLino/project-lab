-- CreateTable
CREATE TABLE "products" (
    "uniqe_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "brand_name" TEXT NOT NULL,
    "asin" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "upc_ean_code" TEXT NOT NULL,
    "list_price" TEXT NOT NULL,
    "selling_price" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "model_number" TEXT NOT NULL,
    "about_product" TEXT NOT NULL,
    "product_specification" TEXT NOT NULL,
    "technical_details" TEXT NOT NULL,
    "shipping_weight" TEXT NOT NULL,
    "product_dimensions" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "variants" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "product_url" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "product_details" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "direction_to_use" TEXT NOT NULL,
    "is_amazon_seller" TEXT NOT NULL,
    "size_quantity_variant" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("uniqe_id")
);

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "item_purchased" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "purchase_amount_usd" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "review_rating" TEXT NOT NULL,
    "subscription_status" TEXT NOT NULL,
    "shipping_type" TEXT NOT NULL,
    "discount_applied" TEXT NOT NULL,
    "promo_code_used" TEXT NOT NULL,
    "previous_purchases" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "frequency_of_purchases" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "sales" (
    "user_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "interaction_type" TEXT NOT NULL,
    "time_stamp" TEXT NOT NULL,
    "unnamed_4" TEXT NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("user_id")
);
