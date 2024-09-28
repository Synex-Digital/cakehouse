import React from "react";
import { Link } from "react-router-dom";

const HoverButton = ({ name, link }) => {
  return (
    <li>
      <Link to={link}>{name}</Link>
    </li>
  );
};

const ShopButton = ({ name, link }) => {
  return (
    <li className="py-[5px] px-5 relative">
      <Link to={link}>{name} </Link>
    </li>
  );
};
export { ShopButton };
export default HoverButton;
