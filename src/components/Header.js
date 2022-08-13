import React from "react";
import "./Header.css";
import { Navbar, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Header(args) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar>
        <Nav className="navigation mx-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="users">Users</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
}

export default Header;
