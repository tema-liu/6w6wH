import Header from "../../component/Layout/Header";
import { StarRating } from "../../component/StarRating";
import {
  Wrapper,
  Container,
  Icon,
} from "../../component/Layout/LayoutComponents";
import {
  UserReviewFooter,
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
import HeartIcon from "../../component/ReviewComponent/HeartIcon";
import styled from "styled-components";
import { TagsBar, Tag } from "../../component/shop/TagsBar";
import { useEffect, useState } from "react";
import { Comment, Reply, ResponseData } from "../../type/type";
// import { mockApi } from "./data";
import MoreVert from "../../component/ReviewComponent/MoreVert";
import ReviewSwiper from "./ReviewSwiper";
import useTimeAgo from "../../hooks/useTimeAgo";
import Placeholder from "./Placeholder";
import Badges from "../../component/Profile/BadgeWindow";
import Country from "../../component/Profile/ConuntryIcon";
import { getReply } from "../../apis/getReply";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useNavigate, useParams } from "react-router-dom";
import useProfileClickHandler from "../../hooks/useProfileClickHandler";
import { defaultReviewUserPhoto, userPicture } from "../../constants/srcPaths";
import VoiceReader from "../../component/shop/VoiceReader";

type CommentContentProps = {
  $isHavePhoto: boolean;
};

const CommentContent = styled(CommentCardContent)<CommentContentProps>`
  padding: ${({ $isHavePhoto }) =>
    $isHavePhoto ? "8px 8px 16px 8px" : " 16px 8px"};
  border-radius: ${({ $isHavePhoto }) =>
    $isHavePhoto ? "0 0 32px 32px " : "32px"};
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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

const ShopNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ShopName = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.38px;
  font-family: mix;
  cursor: pointer;
`;

function Reviews() {
  const navigate = useNavigate();
  const [replies, setCommentReplies] = useState<Reply[] | null>(null);
  const [response, setResponse] = useState<ResponseData<Comment> | null>(null);
  const [loading, setLoading] = useState(true); //loading 狀態
  const userToken = useSelector((state: RootState) => state.auth.token);
  const data = response?.data ?? null;
  //網址取得動態id
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const numericId = Number(id);
      try {
        const result = await getReply(numericId, userToken);
        if (!result.status) {
          navigate("*");
        }
        // const result = await mockApi("/api/items");
        setResponse(result);
        if (result.data?.reply) {
          setCommentReplies(result.data?.reply);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProfileClick = useProfileClickHandler();
  const handleAddReply = (reply: Reply) => {
    // 更新回覆列表
    setCommentReplies((prevReplies) => {
      const updatedReplies = [...(prevReplies ?? []), reply];
      return updatedReplies;
    });
  };

  if (loading) {
    return (
      <Wrapper>
        <Header title={"Reviews"} />
        <Container>
          <Placeholder />
        </Container>
      </Wrapper>
    );
  }
  return (
    <>
      {data !== null && (
        <Wrapper>
          <Header title={"Reviews"} />
          <Container>
            {data.photos?.length > 0 && <ReviewSwiper photos={data.photos} />}
            <CommentContent $isHavePhoto={data.photos?.length > 0}>
              <ShopNameBox>
                <ShopName
                  onClick={() => {
                    navigate(`/storeList/${data.storeId}`);
                  }}
                >
                  {data.displayName}
                </ShopName>
                <VoiceReader
                  text={data.displayName ? data.displayName : ""}
                  $margin={"0 8px"}
                >
                  {data.displayName}
                </VoiceReader>
              </ShopNameBox>
              <CommentDetail>
                <Head>
                  <HeadShot
                    onClick={() => {
                      handleProfileClick(data.userId);
                    }}
                    src={
                      data.userPhoto
                        ? userPicture + data.userPhoto
                        : defaultReviewUserPhoto
                    }
                    alt="headShot"
                  />
                  <BadgeBox>
                    <Country country={data.country} />
                    <Badges level={data.badge} />
                  </BadgeBox>
                </Head>
                <HeadRight>
                  <UserReviewTop>
                    <UserRating>
                      <span style={{ display: "block" }}>{data.userName}</span>
                      <StarRating
                        star={data?.starCount as 1 | 2 | 3 | 4 | 5}
                        width={112}
                        height={16}
                      />
                    </UserRating>
                    <div>
                      <MoreVert
                        id={data.commentId}
                        reviewOrReply="review"
                        userId={data.userId!}
                      />
                    </div>
                  </UserReviewTop>
                  <UserReviewMain>
                    <Tags>
                      {data.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Tags>
                    <p>{data.comment}</p>
                  </UserReviewMain>
                  <UserReviewFooter>
                    <h5>{useTimeAgo(data.createTime)}</h5>
                    <SocialBlock>
                      <div>
                        <h4>{replies?.length ? replies.length : ""}</h4>
                        <ChatIcon
                          $isPointer={true}
                          className="material-symbols-outlined"
                        >
                          chat_bubble
                        </ChatIcon>
                      </div>
                      <div>
                        <HeartIcon
                          type="comment"
                          likeId={data.commentId}
                          likeCount={data.likeCount ?? 0}
                          isLike={data.isLike ?? false}
                        />
                      </div>
                    </SocialBlock>
                  </UserReviewFooter>
                </HeadRight>
              </CommentDetail>
            </CommentContent>
            {replies && (
              <RepliesCard setReplies={setCommentReplies} replies={replies} />
            )}
          </Container>
          <MessageBox
            userId={data.userId}
            commentId={data.commentId}
            onAddReply={handleAddReply}
          />
        </Wrapper>
      )}
    </>
  );
}

export default Reviews;
