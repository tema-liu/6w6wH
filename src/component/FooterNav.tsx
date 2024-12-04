import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { IconImg } from "./LayoutComponents";
import fire from "../assets/fire.png";
import fireOn from "../assets/fire_on.png";
import add from "../assets/add_circle.png";
import addOn from "../assets/add_on.png";
import search from "../assets/Frame65.png";
import notify from "../assets/Icon.png";
import person from "../assets/person.png";

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: #fff;
  padding-bottom: 24px;
  box-shadow: 0px -8px 16px 4px #0000000a, 0px -4px 8px 0px #0000001a;
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78.4px;
  height: 48px;
`;

type IconProps = {
  $opacity?: boolean; // 或者根据需要调整类型
};
const Icon = styled(IconImg)<IconProps>`
  width: 32px;
  height: 32px;
  opacity: ${({ $opacity }) => ($opacity ? 1 : 0.5)};
  transition: opacity 0.25s ease;
`;

function FooterNav() {
  const location = useLocation();

  return (
    <Footer>
      <StyledNavLink to="/">
        {({ isActive }) => (
          <IconImg src={isActive ? fireOn : fire} alt="fireIcon" />
        )}
      </StyledNavLink>
      <StyledNavLink to="/addShop">
        {({ isActive }) => (
          <IconImg src={isActive ? addOn : add} alt="addIcon" />
        )}
      </StyledNavLink>
      <StyledNavLink to="/search">
        {({ isActive }) => (
          <Icon
            src={search}
            alt="search"
            $opacity={
              isActive ||
              ["/storeList", "/storeList/:id"].includes(location.pathname)
            }
          />
        )}
      </StyledNavLink>
      <StyledNavLink to="/notification">
        {({ isActive }) => (
          <IconImg src={isActive ? notify : notify} alt="notify" />
        )}
      </StyledNavLink>
      <StyledNavLink to="/profile">
        {({ isActive }) => (
          <Icon
            src={isActive ? person : person}
            alt="person"
            $opacity={
              isActive ||
              [
                "/login",
                "/faqs",
                "/TermsAndConditions",
                "/PrivacyPolicy",
                "/Add&EditStoreInformation",
                "/settings",
                "/editProfile",
                "/profile",
              ].includes(location.pathname)
            }
          />
        )}
      </StyledNavLink>
    </Footer>
  );
}

export default FooterNav;
