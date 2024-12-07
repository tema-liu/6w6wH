import Header from "../../component/header";
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
import { badgeImages } from "../../constants/imageResources";
import MoreVert from "../../component/MoreVert";
import OutsideAlerter from "../../hooks/OutsideAlerter";

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
  const [response, setResponse] = useState<ResponseData>(null);
  const [loading, setLoading] = useState(true); //loading 狀態

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mockApi("/api/items");
        setResponse(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = response?.data ?? null;

  if (loading) {
    return <div>Loading...</div>; // 顯示 loading 當資料還在加載時
  }
  return (
    <>
      {data !== null && (
        <Wrapper>
          <Header title={"Reviews"} />
          <Container>
            <ImageSection>
              {data.photo
                ? data.photo.map((photo) => (
                    <StoreImg key={photo} src={photo} alt="photo" />
                  ))
                : headShotIcon}
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
                  <HeadShot src={data.userPhoto} alt="headShot" />
                  <BadgeBox>
                    {data.medal &&
                      Object.keys(badgeImages).includes(data.medal) && (
                        <img
                          width={22}
                          src={
                            badgeImages[data.medal as keyof typeof badgeImages]
                          }
                          alt="badge"
                        />
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
                      <MoreVert
                        userID={data.userID!}
                        replyID={data.commentID!}
                      />
                    </div>
                  </UserReviewTop>
                  <UserReviewMain>
                    <Tags>
                      {data.tag.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Tags>
                    <p>{data.comment}</p>
                  </UserReviewMain>
                  <UserReviewFooter>
                    <h5>
                      {data?.postedAt
                        ? new Date(data.postedAt).toLocaleString()
                        : "unknown date"}
                    </h5>
                    <SocialBlock>
                      <div>
                        <h4>{data.reply?.length}</h4>
                        <ChatIcon className="material-symbols-outlined">
                          chat_bubble
                        </ChatIcon>
                      </div>
                      <div>
                        <HeartIcon
                          likeCount={data.likeCount ?? 0}
                          isLike={data.isLike ?? false}
                        />
                      </div>
                    </SocialBlock>
                  </UserReviewFooter>
                </HeadRight>
              </CommentDetail>
            </CommentContent>
            {data.reply && <RepliesCard data={data.reply} />}
            <MessageBox />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default Reviews;
