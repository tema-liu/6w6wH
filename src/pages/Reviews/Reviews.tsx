import Header from "../../component/layout/header";
import { StarRating } from "../../component/StarRating";
import {
  Wrapper,
  Container,
  Icon,
} from "../../component/layout/LayoutComponents";
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
import HeartIcon from "../../component/reviewComponent/HeartIcon";
import styled from "styled-components";
import { TagsBar, Tag } from "../../component/shop/TagsBar";
import { useEffect, useState } from "react";
import { Comment, Reply, ResponseData } from "../../type/type";
import { mockApi } from "./data";
import MoreVert from "../../component/reviewComponent/MoreVert";
import ReviewSwiper from "./ReviewSwiper";
import useTimeAgo from "../../hooks/useTimeAgo";
import Placeholder from "./Placeholder";
import Badges from "../../component/Profile/BadgeWindow";
import Country from "../../component/Profile/ConuntryIcon";
import { getReply } from "../../apis/gatReply";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import defaultUserPhoto from "../../assets/user-3296.svg";

type CommentContentProps = {
  $isHavePhoto: boolean;
};

const CommentContent = styled(CommentCardContent)<CommentContentProps>`
  padding: ${({ $isHavePhoto }) =>
    $isHavePhoto ? "8px 8px 16px 8px" : " 16px 8px"};
  border-radius: ${({ $isHavePhoto }) =>
    $isHavePhoto ? "0 0 32px 32px " : "32px"};
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

function Reviews() {
  const [replies, setCommentReplies] = useState<Reply[] | null | undefined>(
    null
  );
  const [response, setResponse] = useState<ResponseData<Comment> | null>(null);
  const [loading, setLoading] = useState(true); //loading 狀態
  const userToken = useSelector((state: RootState) => state.auth.token);
  const loginUserId = useSelector((state: RootState) => state.auth.userId);
  const data = response?.data ?? null;
  //網址取得動態id
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const numericId = Number(id);
      try {
        const result = await getReply(numericId, userToken);

        // const result = await mockApi("/api/items");
        setResponse(result);
        setCommentReplies(result.data?.reply);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
              <CommentDetail>
                <Head>
                  <HeadShot
                    src={data.userPhoto ? data.userPhoto : defaultUserPhoto}
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
                        commentId={data.commentId}
                        reviewOrReply="review"
                        loginUserId={loginUserId ?? 0}
                        userID={data.userId!}
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
                          likeCount={data.likeCount ?? 0}
                          isLike={data.isLike ?? false}
                        />
                      </div>
                    </SocialBlock>
                  </UserReviewFooter>
                </HeadRight>
              </CommentDetail>
            </CommentContent>
            {replies && <RepliesCard data={replies} />}
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
