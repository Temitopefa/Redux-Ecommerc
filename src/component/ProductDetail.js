import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeProduct,
} from "../redux/actions/product-actions";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProductReducer);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const getProduct = async () => {
    const result = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    // console.log(result.data);
    dispatch(selectedProduct(result.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      getProduct();
    }
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);
  console.log("From store product:", product);
  return (
    <div className="ui grid container margin-top-style">
      {Object.keys(product).length == 0 ? (
        <div>Loading Product...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
