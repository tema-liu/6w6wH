import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { IconImg, Icon } from "./LayoutComponents";
import search from "../assets/Frame65.png";

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
const ImgIcon = styled(IconImg)<IconProps>`
  width: 32px;
  height: 32px;
  opacity: ${({ $opacity }) => ($opacity ? 1 : 0.5)};
  transition: opacity 0.25s ease;
`;

type fillProps = {
  $fill?: boolean; // 或者根据需要调整类型
};

const NavIcon = styled(Icon)<fillProps>`
  font-variation-settings: ${({ $fill }) => ($fill ? "'FILL' 1" : "'FILL' 0")};
  color: ${({ theme, $fill }) =>
    $fill ? theme.colors.gray900 : theme.colors.gray600};
`;

function FooterNav() {
  const location = useLocation();

  return (
    <Footer>
      <StyledNavLink to="/">
        {({ isActive }) => (
          <NavIcon $fill={isActive} className="material-symbols-outlined">
            local_fire_department
          </NavIcon>
        )}
      </StyledNavLink>
      <StyledNavLink to="/addShop">
        {({ isActive }) => (
          <NavIcon $fill={isActive} className="material-symbols-outlined">
            add_circle
          </NavIcon>
        )}
      </StyledNavLink>
      <StyledNavLink to="/search">
        {({ isActive }) => (
          <ImgIcon
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
          <NavIcon $fill={isActive} className="material-symbols-outlined">
            notifications
          </NavIcon>
        )}
      </StyledNavLink>
      <StyledNavLink to="/profile">
        {({ isActive }) => (
          <NavIcon
            $fill={
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
            className="material-symbols-outlined"
          >
            person
          </NavIcon>
        )}
      </StyledNavLink>
    </Footer>
  );
}

export default FooterNav;
