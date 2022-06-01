import React from "react";
function ProductCard(props) {
  const { product } = props;
  return (
    <div className="product_card">
      <div className="product_card_category">{product.category}</div>
      <div className="product_card_img_with_title">
        <div className="product_card_img"
        title={product.description}
        >
          <img
            alt={product.title}
            src={product.image}
            width="100%"
            height="100%"
          />
        </div>
        <div className="product_card_title"
        title={product.description}
        >
            {product.title}
        </div>
      </div>
      <div className="product_card-price_and_order_btn">
          <button>{product.price}</button>
          <button>Order</button>
      </div>
    </div>
  );
}

export default ProductCard;
