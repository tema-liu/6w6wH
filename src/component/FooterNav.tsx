import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IconImg } from "./LayoutComponents";
import fire from "../assets/fire.png";
import add from "../assets/add_circle.png";
import search from "../assets/Frame65.png";
import notify from "../assets/Icon.png";
import person from "../assets/person.png";

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: #fff;
  padding-bottom: 24px;
  box-shadow: 0px -8px 16px 4px #0000000a, 0px -4px 8px 0px #0000001a;
`;
const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78.4px;
  height: 48px;
`;

const Icon = styled(IconImg)`
  width: 32px;
  height: 32px;
`;

function FooterNav() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Footer>
      <NavLink onClick={() => handleNavigate("/")}>
        <IconImg src={fire} alt="fireIcon" />
      </NavLink>
      <NavLink onClick={() => handleNavigate("/addShop")}>
        <IconImg src={add} alt="addIcon" />
      </NavLink>
      <NavLink onClick={() => handleNavigate("/search")}>
        <Icon src={search} alt="search" />
      </NavLink>
      <NavLink onClick={() => handleNavigate("/notification")}>
        <IconImg src={notify} alt="notify" />
      </NavLink>
      <NavLink onClick={() => handleNavigate("/profile")}>
        <IconImg src={person} alt="person" />
      </NavLink>
    </Footer>
  );
}

export default FooterNav;
