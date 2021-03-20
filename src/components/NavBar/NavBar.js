import React from "react";
import { IconButton, Badge, Avatar } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/images/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function NavBar() {
  return (
    <>
      <br />
      <br />
      <nav class="navbar navbar-expand-lg navbar-light my-navbar fixed-top">
        <Link to="/">
          <a class="navbar-brand">
            <img src={logo} alt="Easy Buy" class="logo" />
            <span class="c-name">Easy Buy</span>
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="filler"></div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/">
                <a class="nav-link">
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <div class="spacer"></div>
            <li class="nav-item">
              <Link to="/products">
                <a class="nav-link">
                  Products <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <div class="spacer"></div>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Who We Are
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/aboutUs">
                  <a class="dropdown-item">About Us</a>
                </Link>
                <Link to="/contact">
                  <a class="dropdown-item">Contact</a>
                </Link>
              </div>
            </li>
            <div class="spacer"></div>
              <li class="nav-item">
                <Link to="/signup">
                  <a class="nav-link">
                    Sign Up / Log In <span class="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn btn-secondary"
          data-toggle="tooltip"
          data-placement="top"
          title="Log Out"
        >
          <ExitToAppIcon
            
          />
        </button>
        &nbsp;
        <button
          type="button"
          data-toggle="tooltip"
          class="border-0"
          data-placement="top"
          title
          size="5"
        >
          <Avatar></Avatar>
          {}
        </button>
        <div class="float-right">
          <Link to="/cart">
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
