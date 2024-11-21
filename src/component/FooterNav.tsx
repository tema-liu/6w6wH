import styled from "styled-components";
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
  return (
    <Footer>
      <NavLink>
        <IconImg src={fire} alt="fireIcon" />
      </NavLink>
      <NavLink>
        <IconImg src={add} alt="addIcon" />
      </NavLink>
      <NavLink>
        <Icon src={search} alt="search" />
      </NavLink>
      <NavLink>
        <IconImg src={notify} alt="notify" />
      </NavLink>
      <NavLink>
        <IconImg src={person} alt="person" />
      </NavLink>
    </Footer>
  );
}

export default FooterNav;
