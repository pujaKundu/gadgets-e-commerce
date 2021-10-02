import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //return necessary things
  //we can return multiple things that's why we return them in a array
  return [products, setProducts];
};

export default useProducts;
