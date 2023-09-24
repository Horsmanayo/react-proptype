import React from "react";
import Header from "./Header";

const Navbar = () => {
  // const navItem = ["Home", ]
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "gray",
      }}
    >
      <Header header={10} headerColor={20} />
      <ul style={{ display: "flex" }}>
        <li style={{ marginLeft: "5px" }}>
          <a style={{ textDecoration: "none" }} href="/">
            Home
          </a>
        </li>
        <li style={{ marginLeft: "5px" }}>
          <a style={{ textDecoration: "none" }} href="/">
            Resources
          </a>
        </li>
        <li style={{ marginLeft: "5px" }}>
          <a style={{ textDecoration: "none" }} href="/">
            About
          </a>
        </li>
        <li style={{ marginLeft: "5px" }}>
          <a style={{ textDecoration: "none" }} href="/">
            Career
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
