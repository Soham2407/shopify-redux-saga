import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();

  const getProductsData = () => {
    dispatch(setProducts());
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductItem />
        </div>
      </div>
    </>
  );
};

export default ProductList;
