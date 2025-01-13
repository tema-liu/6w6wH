import styled from "styled-components";
import CollectIcon from "./CollectIcon";
import { TagsBar, Tag } from "./TagsBar";
import { ReviewBtn } from "../button/ReviewBtn";
import { StarRating } from "../StarRating";
import arrowIcon from "../../assets/arrow.png";
import { ReadMore } from "../../pages/SearchResult/ReadMore";
import { useNavigate } from "react-router-dom";
import { SearchResult } from "../../type/type";
import defaultUserPhoto from "../../assets/user-3296.svg";
import { storePicture } from "../../constants/srcPaths";
import noPhotoImg from "../../assets/Item-1.png";

type DonateProps = {
  $isDonate?: boolean;
};

const ShopCardBox = styled.div`
  position: relative;
  cursor: pointer;
`;
const ShopCardImg = styled.img<DonateProps>`
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 92px;
  max-height: 424px;
  border-radius: 32px;
  object-fit: cover;
  object-position: center;
  border: ${({ $isDonate, theme }) =>
    $isDonate ? `8px solid ${theme.colors.container2}` : "none"};
`;
const ShopCardMain = styled.div`
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  margin-top: -270px;
  position: relative;
  max-width: 350px;
  border-radius: 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const PlaceName = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  h2 {
    font-family: "mix";
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    margin-right: 36px;
  }
`;
const RantingConTainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
  flex-shrink: 0;
`;

const RatingContent = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const RepliesBox = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
  display: flex;
  column-gap: 2px;
`;

const RepliesNum = styled.h5`
  text-decoration: underline;
`;
const ArrowIcon = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;
const BorderBox = styled.div`
  width: 1px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

const MessageBox = styled.div`
  display: flex;
  padding: 8px 0;
  column-gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const HeadShot = styled.img`
  width: 64px; /* 設置圖片寬度 */
  height: 64px; /* 設置圖片高度（確保是正方形） */
  border-radius: 50%; /* 圓形裁切 */
  margin-left: auto;
  object-fit: cover; /* 確保圖片內容不變形 */
`;
const ADtag = styled.div`
  position: absolute;
  top: 0;
  right: 32px;
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

type shopCardProps = {
  data: SearchResult;
};
function ShopCard({ data }: shopCardProps) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <>
      <ShopCardBox
        onClick={() => {
          navigate(`/storeList/${data.id}`);
        }}
      >
        {data.isAdvertise && (
          <ADtag>
            <span>AD</span>
          </ADtag>
        )}
        <ShopCardImg
          $isDonate={data.isAdvertise}
          src={
            data.photos.length > 0
              ? `${storePicture}${data.photos[0].PictureUrl}`
              : noPhotoImg
          }
          alt="shopImg"
        />
        <ShopCardMain>
          <CollectIcon
            storeId={data.id}
            isFavoriteData={data.isFavorited}
            right={28}
          />
          <PlaceName>
            <h2>{data.displayName}</h2>
          </PlaceName>
          <TagsBar>
            {data.tags.length > 0 ? (
              data.tags.map((item) => (
                <Tag
                  key={item.tagName}
                >{`${item.tagName} (${item.count})`}</Tag>
              ))
            ) : (
              <Tag>There are no review yet</Tag>
            )}
          </TagsBar>
          {data.comments.length > 0 && (
            <MessageBox>
              {data.comments[0] && (
                <ReadMore text={data.comments[0]?.content} />
              )}
              <HeadShot
                src={data.comments?.[0]?.userPhoto || defaultUserPhoto}
              />
            </MessageBox>
          )}
          <RatingContent>
            <ReviewBtn navigate={data.id} />
            <RantingConTainer>
              <StarRating
                star={data.starCount as 1 | 2 | 3 | 4 | 5}
                width={112}
                height={16}
              />
              <RepliesBox>
                <RepliesNum>{`${data.reviewCount} Reviews`} </RepliesNum>
                <h5>/</h5>
                <RepliesNum>{data.replyCount} Replies</RepliesNum>
              </RepliesBox>
            </RantingConTainer>
            <BorderBox />
            <ArrowIcon>
              <img src={arrowIcon} />
            </ArrowIcon>
          </RatingContent>
        </ShopCardMain>
      </ShopCardBox>
    </>
  );
}

export default ShopCard;
