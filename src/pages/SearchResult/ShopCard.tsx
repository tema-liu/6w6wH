import styled from "styled-components";
import CollectIcon from "../../component/CollectIcon";
import { TagsBar, Tag } from "../../component/TagsBar";
import { ReviewBtn } from "../../component/ReviewBtn";
import { StarRating } from "../../component/StarRating";
import arrowIcon from "../../assets/arrow.png";
import photo from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { ReadMore } from "./ReadMore";

const ShopCardBox = styled.div``;
const ShopCardImg = styled.img`
  width: 100%;
  height: 424px;
  border-radius: 32px;
  object-fit: cover;
  object-position: center;
`;
const ShopCardMain = styled.div`
  margin-top: -200px;
  position: relative;
  width: 350px;
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
  h6 {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray600};
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
  object-fit: cover; /* 確保圖片內容不變形 */
`;

function ShopCard() {
  return (
    <>
      <ShopCardBox>
        <ShopCardImg src="https://picsum.photos/1000/800" alt="shopImg" />
        <ShopCardMain>
          <PlaceName>
            <CollectIcon right={28} />
            <h2> Left Bank Rendezvous Cafe 南國人文美食坊</h2>
            <h6>336m from R11 Kaohsiung Main Station</h6>
          </PlaceName>
          <TagsBar>
            <Tag>Multilingual (12)</Tag>
            <Tag>Friendly (9)</Tag>
            <Tag>Food (5)</Tag>
            <Tag>Food (5)</Tag>
          </TagsBar>
          <MessageBox>
            <ReadMore
              text={
                " Really fantastic all tasted are very delicious and no worry about Halal. I did not  I did not I did not"
              }
            />

            <HeadShot src={photo} />
          </MessageBox>

          <RatingContent>
            <ReviewBtn />
            <RantingConTainer>
              <StarRating star={3} width={112} height={16} />
              <RepliesBox>
                <RepliesNum>23 Reviews</RepliesNum>
                <h5>/</h5>
                <RepliesNum>35 Replies</RepliesNum>
              </RepliesBox>
            </RantingConTainer>
            <BorderBox />
            <ArrowIcon>
              <img src={arrowIcon} />
            </ArrowIcon>
          </RatingContent>
        </ShopCardMain>
      </ShopCardBox>
      <ShopCardBox>
        <ShopCardImg src="https://picsum.photos/1000/800" alt="shopImg" />
        <ShopCardMain>
          <PlaceName>
            <CollectIcon right={28} />
            <h2> Left Bank Rendezvous Cafe 南國人文美食坊</h2>
            <h6>336m from R11 Kaohsiung Main Station</h6>
          </PlaceName>
          <TagsBar>
            <Tag>Multilingual (12)</Tag>
            <Tag>Friendly (9)</Tag>
            <Tag>Food (5)</Tag>
            <Tag>Food (5)</Tag>
          </TagsBar>
          <MessageBox>
            <ReadMore
              text={
                " Really fantastic all tasted are very delicious and no worry about Halal. I did not  I did not I did not"
              }
            />

            <HeadShot src={photo} />
          </MessageBox>

          <RatingContent>
            <ReviewBtn />
            <RantingConTainer>
              <StarRating star={3} width={112} height={16} />
              <RepliesBox>
                <RepliesNum>23 Reviews</RepliesNum>
                <h5>/</h5>
                <RepliesNum>35 Replies</RepliesNum>
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
