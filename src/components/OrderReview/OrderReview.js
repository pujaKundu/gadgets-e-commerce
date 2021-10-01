import React from "react";
import useProducts from "../../hooks/useProducts";

const OrderReview = () => {
  const [products] = useProducts();
  return (
    <div>
      <h2>{products.length}</h2>
      <h2>This is order review</h2>
    </div>
  );
};

export default OrderReview;
