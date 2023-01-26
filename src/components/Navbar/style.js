import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logo } from "../../assets/navbar/imgs/logo.svg";
import { ReactComponent as search } from "../../assets/navbar/icons/search.svg";
import { ReactComponent as card } from "../../assets/navbar/icons/card.svg";
import { ReactComponent as logout } from "../../assets/navbar/icons/logout.svg";

export const Container = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  margin: 25px auto 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  margin-bottom: 12px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: flex-end;
`;

export const Link = styled(NavLink)`
  font-family: "Cera Pro", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #3d3d3d;
  padding-bottom: 20px;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

Logo.Img = styled(logo)``;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`;

export const Icons = styled.div``;

Icons.Search = styled(search)`
  cursor: pointer;
`;
Icons.Card = styled(card)`
  cursor: pointer;
  margin-left: 30px;
`;
Icons.Logout = styled(logout)`
  margin-right: 6px;
`;

export const LoginBtn = styled.div`
  display: flex;
  padding: 10px 18px;
  align-items: center;
  background-color: #46a358;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 35px;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }

  :hover {
    background-color: #47a354;
  }
`;
