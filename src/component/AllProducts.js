import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { allProducts } from "../redux/actions/product-actions";

const AllProducts = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const result = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    // console.log(result.data);
    dispatch(allProducts(result.data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log("From store", products);
  return (
    <div className="ui grid container margin-top-style">
      <ProductComponent />
    </div>
  );
};

export default AllProducts;
