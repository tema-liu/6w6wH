import badge from "../../assets/badge.png";
// import badge2 from "../../assets/badge2.png";
import styled from "styled-components";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import { Icon } from "../../component/LayoutComponents";
import HeartIcon from "../../component/HeartIcon";
import { TagsBar, Tag } from "../../component/TagsBar";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
  > :last-child {
    border-radius: 0 0 32px 32px;
  }
`;
const CommentCardContent = styled.div`
  padding: 16px 8px 8px 8px;
  background-color: ${({ theme }) => theme.colors.light};
`;
const CommentCardImgBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 120px;
  overflow: auto;

  img {
    width: 120px;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
  }
  img + img {
    margin-left: 4px;
  }
`;
const CommentCardDetail = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Head = styled.div`
  width: 64px;
`;

const HeadRight = styled.div`
  width: 100%;
  margin-left: 8px;
  overflow: hidden; /* 防止內容溢出父容器 */
`;
const HeadShot = styled.img`
  width: 64px; /* 設置圖片寬度 */
  height: 64px; /* 設置圖片高度（確保是正方形） */
  border-radius: 50%; /* 圓形裁切 */
  object-fit: cover; /* 確保圖片內容不變形 */
`;
const BadgeBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;
const UserReviewTop = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 8px; // 子元素之間的間距
  }
`;

const UserReviewMain = styled.div`
  padding: 4px 0 8px 0;
`;

const SocialBlock = styled.div`
  display: flex;
  div {
    width: 88px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      margin-left: 4px;
    }
  }
`;

const UserReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const Tags = styled(TagsBar)`
  border: none;
  padding: 2px 0 10px 0;
  padding-top: 2px;
  padding-bottom: 10px;
`;
const ChatIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
`;

function CommentCard() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <CommentCardContent>
          <CommentCardImgBox>
            <img src="https://picsum.photos/1000/800" alt="" />
            <img src="https://picsum.photos/1000/800" alt="" />
            <img src="https://picsum.photos/1000/800" alt="" />
            <img src="https://picsum.photos/1000/800" alt="" />
          </CommentCardImgBox>
          <CommentCardDetail>
            <Head>
              <HeadShot src={headShotIcon} alt="headShot" />
              <BadgeBox>
                <img width={22} src={badge} alt="badge" />
              </BadgeBox>
            </Head>
            <HeadRight>
              <UserReviewTop>
                <span style={{ display: "block" }}>Ala</span>
                <StarRating star={3} width={112} height={16} />
                <Tags>
                  <Tag>Multilingual</Tag>
                  <Tag>Friendly</Tag>
                </Tags>
              </UserReviewTop>
              <UserReviewMain>
                <p>
                  Kopi susu is super yummy! Nice ambient and service! Come hang
                  out!
                </p>
              </UserReviewMain>
              <UserReviewFooter>
                <h5>3 hour ago</h5>
                <SocialBlock>
                  <div>
                    <h4>1.5k</h4>
                    <ChatIcon
                      className="material-symbols-outlined"
                      onClick={() => {
                        navigate("/review/:id");
                      }}
                    >
                      chat_bubble
                    </ChatIcon>
                  </div>
                  <div>
                    <h4>999</h4>
                    <HeartIcon />
                  </div>
                </SocialBlock>
              </UserReviewFooter>
            </HeadRight>
          </CommentCardDetail>
        </CommentCardContent>
        <CommentCardContent>
          <CommentCardImgBox>
            <img src="https://picsum.photos/1000/800" alt="" />
            <img src="https://picsum.photos/1000/800" alt="" />
            <img src="https://picsum.photos/1000/800" alt="" />
            <img src="https://picsum.photos/1000/800" alt="" />
          </CommentCardImgBox>
          <CommentCardDetail>
            <Head>
              <HeadShot src={headShotIcon} alt="headShot" />
              <BadgeBox>
                <img width={22} src={badge} alt="badge" />
              </BadgeBox>
            </Head>
            <HeadRight>
              <UserReviewTop>
                <span style={{ display: "block" }}>Ala</span>
                <StarRating star={3} width={112} height={16} />
                <Tags>
                  <Tag>Multilingual</Tag>
                  <Tag>Friendly</Tag>
                </Tags>
              </UserReviewTop>
              <UserReviewMain>
                <p>
                  Kopi susu is super yummy! Nice ambient and service! Come hang
                  out!
                </p>
              </UserReviewMain>
              <UserReviewFooter>
                <h5>3 hour ago</h5>
                <SocialBlock>
                  <div>
                    <h4>1.5k</h4>
                    <ChatIcon
                      className="material-symbols-outlined"
                      onClick={() => {
                        navigate("/review/:id");
                      }}
                    >
                      chat_bubble
                    </ChatIcon>
                  </div>
                  <div>
                    <h4>999</h4>
                    <HeartIcon />
                  </div>
                </SocialBlock>
              </UserReviewFooter>
            </HeadRight>
          </CommentCardDetail>
        </CommentCardContent>
      </Container>
    </>
  );
}

export default CommentCard;
