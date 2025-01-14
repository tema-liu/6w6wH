import bugIcon from "../../assets/bug.png";
import { TitleBox, TitleBoxIcon, TitleBoxText } from "../../component/TitleBox";
import { StarRating } from "../../component/StarRating";
import {
  ShopCard,
  ShopCards,
  Box,
  ShopMain,
  ShopNameContainer,
  ShopImg,
  ShopName,
  Review,
  HeadShot,
} from "./style/hotShopList";
import { PopularStore } from "../../type/type";
import { storePicture } from "../../constants/srcPaths";
import noPhotoImg from "../../assets/Item-1.png";
import defaultUserPhoto from "../../assets/user-3296.svg";

function HotShopList({ shopList }: { shopList: PopularStore[] }) {
  const colors = ["secondary", "outline1", "outline2", "outline3"];
  console.log(shopList);
  return (
    <ShopCards>
      {shopList.map((shop, index) => {
        return (
          <ShopCard key={shop.displayName}>
            <TitleBox color={colors[index]}>
              <TitleBoxIcon src={bugIcon} alt="bugIcon" />
              <TitleBoxText>Popular Stores</TitleBoxText>
            </TitleBox>
            <Box>
              <ShopMain>
                <ShopNameContainer>
                  <ShopName>
                    <StarRating
                      width={112}
                      height={16}
                      star={shop.starCount as 0 | 1 | 2 | 3 | 4 | 5}
                    />
                    <h2>{shop.displayName}</h2>
                  </ShopName>
                </ShopNameContainer>
                <ShopImg
                  src={
                    shop.photos
                      ? `${storePicture}${shop.photos[0]}`
                      : noPhotoImg
                  }
                  alt="photo"
                />
              </ShopMain>
              <Review>
                {shop.comment && (
                  <>
                    <HeadShot
                      src={
                        shop.comment.userPhoto
                          ? shop.comment.userPhoto
                          : defaultUserPhoto
                      }
                      alt="photo"
                    />
                    <p>{shop.comment?.content}</p>
                  </>
                )}
              </Review>
            </Box>
          </ShopCard>
        );
      })}
    </ShopCards>
  );
}
export default HotShopList;
