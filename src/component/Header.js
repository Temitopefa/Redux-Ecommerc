import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu" style={{ heigth: "55px" }}>
      <div className="ui container center">
        <h1>
          <Link to="/">ReduxEcomm</Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
