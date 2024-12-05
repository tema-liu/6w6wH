import Header from "../../component/header";
import badge from "../../assets/badge.png";
import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import leftBtn from "../../assets/Frame.png";
import rightBtn from "../../assets/Vector.png";
import { Wrapper, Container, Icon } from "../../component/LayoutComponents";
import {
  Icon as IconImg,
  UserReviewFooter,
  ImageSection,
  StoreImg,
  BtnContainer,
  CarouselBtn,
  CommentCardContent,
  CommentCardDetail,
  Head,
  HeadRight,
  BadgeBox,
  UserRating,
  UserReviewTop,
  UserReviewMain,
  HeadShot,
  SocialBlock,
} from "../Reviews/styled";
import RepliesCard from "./RepliesCard";
import MessageBox from "./MessageBox";
import HeartIcon from "../../component/HeartIcon";
import styled from "styled-components";
import { TagsBar, Tag } from "../../component/TagsBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResponseData } from "../../type/type";
import { mockApi } from "./data";

const CommentContent = styled(CommentCardContent)`
  padding: 8px 8px 16px 8px;
`;
const CommentDetail = styled(CommentCardDetail)`
  margin: 0;
`;
const Tags = styled(TagsBar)`
  border: none;
  padding: 2px 0 10px 0;
  padding-top: 2px;
  padding-bottom: 10px;
`;
const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
`;
const MenuOptions = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  z-index: 10;
  display: flex;
  flex-direction: column;

  > button + button {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
  button {
    padding: 4px;
    font-size: 16px;
    white-space: nowrap;
  }
`;

function Reviews() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(true); //loading 狀態

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mockApi("/api/items");
        setResponse(result);
        setLoading(false);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = response?.data;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切換選單顯示狀態
  };

  // 從後端獲得的圖片標識符
  const badgeType: string | null = data?.medal ?? null;

  // 圖片選擇邏輯
  const badgeImages = {
    badge: badge,
    badge2: badge2,
  } as const;

  const selectedBadge =
    badgeType && Object.keys(badgeImages).includes(badgeType)
      ? badgeImages[badgeType as keyof typeof badgeImages]
      : null;
  if (loading) {
    return <div>Loading...</div>; // 顯示 loading 當資料還在加載時
  }
  return (
    <>
      <Wrapper>
        <Header title={"Reviews"} />
        <Container>
          <ImageSection>
            {data?.photo.map((photo) => (
              <StoreImg key={photo} src={photo} alt="photo" />
            ))}
            <BtnContainer>
              <CarouselBtn>
                <StoreImg src={leftBtn} alt="leftBtn" />
              </CarouselBtn>
              <CarouselBtn>
                <StoreImg src={rightBtn} alt="rightBtn" />
              </CarouselBtn>
            </BtnContainer>
          </ImageSection>
          <CommentContent>
            <CommentDetail>
              <Head>
                <HeadShot src={data?.userPhoto} alt="headShot" />
                <BadgeBox>
                  {selectedBadge && (
                    <img width={22} src={selectedBadge} alt="badge" />
                  )}
                </BadgeBox>
              </Head>
              <HeadRight>
                <UserReviewTop>
                  <UserRating>
                    <span style={{ display: "block" }}>Ala</span>
                    <StarRating
                      star={data?.starCount as 1 | 2 | 3 | 4 | 5}
                      width={112}
                      height={16}
                    />
                  </UserRating>
                  <div>
                    <IconImg
                      onClick={toggleMenu}
                      className="material-symbols-outlined"
                    >
                      more_vert
                    </IconImg>
                    {isMenuOpen && (
                      <MenuOptions>
                        <button>delete</button>
                        <button>report</button>
                      </MenuOptions>
                    )}
                  </div>
                </UserReviewTop>
                <UserReviewMain>
                  <Tags>
                    {data?.tag.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                  <p>{data?.comment}</p>
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>{data?.reply?.length}</h4>
                      <ChatIcon className="material-symbols-outlined">
                        chat_bubble
                      </ChatIcon>
                    </div>
                    <div>
                      <h4>{data?.likeCount}</h4>
                      <HeartIcon isLike={data?.isLike ?? false} />
                    </div>
                  </SocialBlock>
                </UserReviewFooter>
              </HeadRight>
            </CommentDetail>
          </CommentContent>
          <RepliesCard />
          <MessageBox />
        </Container>
      </Wrapper>
    </>
  );
}

export default Reviews;
