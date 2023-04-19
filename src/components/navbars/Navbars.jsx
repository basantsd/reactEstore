import "./navbar.css";
import React from "react";

import { Link } from "react-router-dom";
import { NavbarBrand, Nav, NavItem } from "reactstrap";

import "../../assets/vendor/nucleo/css/nucleo.css";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss?v1.1.0";

export default function Navbars(args) {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="container">
            <NavbarBrand to="/">E-SHOP</NavbarBrand>
            <Nav>
              <NavItem>
                <Link active to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about-us">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/products">Products</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact-us">Contact-Us</Link>
              </NavItem>
            </Nav>
          </div>
        </nav>
      </div>
    </>
  );
}
