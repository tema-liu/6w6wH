import { Wrapper, Container, IconImg } from "../../component/LayoutComponents";
import Header from "../../component/header";
import FooterNav from "../../component/FooterNav";
import styled from "styled-components";

function Search() {
  return (
    <Wrapper>
      <Header title={"Search"} />
      <Container></Container>
      <FooterNav />
    </Wrapper>
  );
}

export default Search;
