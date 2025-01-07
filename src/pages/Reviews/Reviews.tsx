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
import { Comment, ResponseData } from "../../type/type";
import { mockApi } from "./data";
import MoreVert from "../../component/reviewComponent/MoreVert";
import ReviewSwiper from "./ReviewSwiper";
import useTimeAgo from "../../hooks/useTimeAgo";
import Placeholder from "./Placeholder";
import Badges from "../../component/Profile/BadgeWindow";
import Country from "../../component/Profile/ConuntryIcon";

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
  const [response, setResponse] = useState<ResponseData<Comment> | null>(null);
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
            {data.photos && <ReviewSwiper photos={data.photos} />}
            <CommentContent $isHavePhoto={!!data.photos}>
              <CommentDetail>
                <Head>
                  <HeadShot src={data.userPhoto} alt="headShot" />
                  <BadgeBox>
                    <Country country={data.country} />
                    <Badges level={data.badge} />
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
                      <MoreVert reviewOrReply="review" userID={data.userID!} />
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
                    <h5>{useTimeAgo(data.postedAt)}</h5>
                    <SocialBlock>
                      <div>
                        <h4>{data.reply?.length}</h4>
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
            {data.reply && <RepliesCard data={data.reply} />}
          </Container>
          <MessageBox />
        </Wrapper>
      )}
    </>
  );
}

export default Reviews;
