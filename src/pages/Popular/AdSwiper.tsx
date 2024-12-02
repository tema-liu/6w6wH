import styled from "styled-components";
import photo from "../../assets/b166552d01f7fc185b15236002eda985.png";

const ADtag = styled.div`
  position: absolute;
  top: 0;
  right: 24px;
  width: 30px;
  height: 30px;
  padding: 4px;
  background: #00000080;
  border-radius: 0 0 4px 4px;
  span {
    color: ${({ theme }) => theme.colors.light};
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
  }
`;

const Swiper = styled.div`
  position: relative;
  height: 248px;
  margin-left: -8px;
  margin-right: -8px;
  background-color: ${({ theme }) => theme.colors.outline1};
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function AdSwiper() {
  return (
    <Swiper>
      <ADtag>
        <span>AD</span>
      </ADtag>
      <Photo src={photo} alt="advertise" />
    </Swiper>
  );
}

export default AdSwiper;
