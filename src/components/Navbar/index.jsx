import React from "react";
import {
  Container,
  Link,
  Nav,
  Logo,
  NavbarRight,
  Icons,
  LoginBtn,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <Link exact to={"/"}>
        <Logo.Img />
      </Link>
      <Nav>
        <Link
          activeStyle={{ borderBottom: "4px solid #46A358", fontWeight: "700" }}
          exact
          to={"/home"}
        >
          Home
        </Link>
        <Link
          activeStyle={{ borderBottom: "4px solid #46A358", fontWeight: "700" }}
          to={"/shop"}
        >
          Shop
        </Link>
        <Link
          activeStyle={{ borderBottom: "4px solid #46A358", fontWeight: "700" }}
          to={"/plantCare"}
        >
          Plant Care
        </Link>
        <Link
          activeStyle={{ borderBottom: "4px solid #46A358", fontWeight: "700" }}
          to={"/blogs"}
        >
          Blogs
        </Link>
      </Nav>
      <NavbarRight>
        <Icons.Search />
        <Icons.Card />
        <LoginBtn>
          <Icons.Logout />
          <span>Login</span>
        </LoginBtn>
      </NavbarRight>
    </Container>
  );
};

export default Navbar;
