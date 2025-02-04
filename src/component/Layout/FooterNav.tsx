import styled from "styled-components";
import { NavLink, useLocation, matchPath, useNavigate } from "react-router-dom";
import { IconImg, Icon } from "./LayoutComponents";
import search from "../../assets/Frame65Large.svg";
import { useEffect, useState } from "react";
import { getIsHaveNotify } from "../../apis/getIsHaveNotify";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  z-index: 10;
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
  width: auto;
  height: 24px;
  opacity: ${({ $opacity }) => ($opacity ? 1 : 0.5)};
  transition: opacity 0.25s ease;
`;

type IsActive = {
  $isActive?: boolean; // 或者根据需要调整类型
};

const NavIcon = styled(Icon)<IsActive>`
  font-variation-settings: ${({ $isActive }) =>
    $isActive ? "'FILL' 1" : "'FILL' 0"};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.gray900 : theme.colors.gray600};
  position: relative;
`;
const Circle = styled.span<IsActive>`
  position: absolute;
  right: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? "transparent" : theme.colors.danger};
`;

function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [haveNotify, setHaveNotify] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const storeList = ["/storeList", "/storeList/:id", "postComment/:id"];
  const profileList = [
    "/login",
    "/faqs",
    "/TermsAndConditions",
    "/PrivacyPolicy",
    "/Add&EditStoreInformation",
    "/settings",
    "/editProfile",
    "/profile",
  ];
  const isStoreListActive = storeList.some((pathPattern) =>
    matchPath(pathPattern, location.pathname)
  );
  const isProfileListActive = profileList.some((pathPattern) =>
    matchPath(pathPattern, location.pathname)
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await getIsHaveNotify(token);
      setHaveNotify(res.status);
    };
    fetchData();
  }, [navigate]);

  return (
    <Footer>
      <StyledNavLink to="/">
        {({ isActive }) => (
          <NavIcon
            $isPointer={true}
            $isActive={isActive}
            className="material-symbols-outlined"
          >
            local_fire_department
          </NavIcon>
        )}
      </StyledNavLink>
      <StyledNavLink to="/addShop">
        {({ isActive }) => (
          <NavIcon
            $isPointer={true}
            $isActive={isActive}
            className="material-symbols-outlined"
          >
            add_circle
          </NavIcon>
        )}
      </StyledNavLink>
      <StyledNavLink to="/search">
        {({ isActive }) => (
          <ImgIcon
            src={search}
            alt="search"
            $opacity={isActive || isStoreListActive}
          />
        )}
      </StyledNavLink>
      <StyledNavLink to="/notification">
        {({ isActive }) => (
          <NavIcon
            $isPointer={true}
            $isActive={isActive}
            className="material-symbols-outlined"
          >
            <Circle $isActive={!haveNotify} />
            notifications
          </NavIcon>
        )}
      </StyledNavLink>
      <StyledNavLink to="/profile">
        {({ isActive }) => (
          <NavIcon
            $isPointer={true}
            $isActive={isActive || isProfileListActive}
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
