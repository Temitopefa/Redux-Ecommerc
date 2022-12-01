import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.productReducer.productList);
  // console.log(products);
  // const product = products[0];
  const allMarkUp = products.map((prod) => {
    return (
      <div className="four wide column" key={prod.id}>
        <Link to={`/products/${prod.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={prod.image} alt={prod.title} />
              </div>
              <div className="content">
                <div className="header">{prod.title}</div>
                <div className="meta price">{prod.price} $</div>
                <div className="meta">{prod.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{allMarkUp};</>;
};

export default ProductComponent;
