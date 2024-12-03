import styled from "styled-components";
import { useState } from "react";
import badge from "../../assets/badge.png";
import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import { IconImg } from "../../component/LayoutComponents";
import review from "../../assets/review.png";
import HeartIcon from "../../component/HeartIcon";
import { TagsBar, Tag } from "../../component/TagsBar";
import overflowIcon from "../../assets/overflow.png";
import { ReadMore } from "../Reviews/ReadMore";

const Input = styled.input`
  clip: rect(0, 0, 0, 0);
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  flex: 1;
  font-size: 17px;
  line-height: 22px;
  padding: 12px 0;
  letter-spacing: -0.41px;
  font-weight: 700;
  text-align: center;
  transition: opacity 0.4s ease;

  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray900};

  /* First label */
  &:first-of-type {
    border-radius: 16px 0 0 0;
    background: ${({ theme }) => theme.colors.secondary};
  }
  &:nth-of-type(2) {
    background: ${({ theme }) => theme.colors.outline1};
  }

  /* Last label */
  &:last-of-type {
    background: ${({ theme }) => theme.colors.outline2};
    border-radius: 0 16px 0 0;
  }

  /* Checked state */
  ${Input}:checked + & {
    opacity: 1;
  }

  /* Focus state */
  ${Input}:focus + & {
    opacity: 1;
  }
`;

const Title = styled.div`
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 16px 16px 0 0;
  margin-right: 8px;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.41px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const Reviews = styled.div`
  position: relative;
  margin-top: -64px;
  filter: drop-shadow(0px 4px 16px #0000000a) drop-shadow(0px 2px 8px #0000002a);
`;

const ReviewContent = styled.div`
  border-radius: 0 0 16px 16px;
  background: ${({ theme }) => theme.colors.gray100};
  > div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`;

const CommentCardContent = styled.div`
  padding: 16px 8px 8px 8px;
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
    img {
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

const CommentCard = styled(CommentCardDetail)`
  margin: 0;
  padding: 16px 8px;
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
const Icon = styled(IconImg)`
  margin: 8px;
`;

const UserReplyTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function HotReviews() {
  //單選nav
  const [selectedOption, setSelectedOption] = useState("Popular");

  //處理選擇的變更
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切換選單顯示狀態
  };

  return (
    <Reviews>
      <div style={{ display: "flex" }}>
        <Title>Thread</Title>
        <Input
          id="Popular"
          type="radio"
          value="Popular"
          checked={selectedOption === "Popular"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Popular">Popular</Label>
        <Input
          id="Review"
          type="radio"
          value="Review"
          checked={selectedOption === "Review"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Review">Review</Label>
        <Input
          id="Lastest"
          type="radio"
          value="Lastest"
          checked={selectedOption === "Lastest"}
          onChange={handleOptionChange}
        />
        <Label htmlFor="Lastest">Lastest</Label>
      </div>
      <ReviewContent>
        {selectedOption == "Popular" && (
          <>
            <CommentCardContent>
              <CommentCardImgBox>
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
                      Kopi susu is super yummy! Nice ambient and service! Come
                      hang out!
                    </p>
                  </UserReviewMain>
                  <UserReviewFooter>
                    <h5>3 hour ago</h5>
                    <SocialBlock>
                      <div>
                        <h4>1.5k</h4>
                        <IconImg src={review} alt="review" />
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
            <CommentCard>
              <Head>
                <HeadShot src={headShotIcon} alt="headShot" />
                <BadgeBox>
                  <img width={22} src={badge} alt="badge" />
                </BadgeBox>
              </Head>
              <HeadRight>
                <UserReplyTop>
                  <span style={{ display: "block" }}>Ala</span>
                  <button onClick={toggleMenu}>
                    <Icon src={overflowIcon} alt="overflow" />
                    {isMenuOpen && (
                      <MenuOptions>
                        <button>delete</button>
                        <button>report</button>
                      </MenuOptions>
                    )}
                  </button>
                </UserReplyTop>
                <UserReviewMain>
                  <ReadMore
                    text={
                      "Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out!"
                    }
                  />
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>4</h4>
                      <HeartIcon />
                    </div>
                  </SocialBlock>
                </UserReviewFooter>
              </HeadRight>
            </CommentCard>
            <CommentCard>
              <Head>
                <HeadShot src={headShotIcon} alt="headShot" />
                <BadgeBox>
                  <img width={22} src={badge} alt="badge" />
                </BadgeBox>
              </Head>
              <HeadRight>
                <UserReplyTop>
                  <span style={{ display: "block" }}>Ala</span>
                  <button onClick={toggleMenu}>
                    <Icon src={overflowIcon} alt="overflow" />
                    {isMenuOpen && (
                      <MenuOptions>
                        <button>delete</button>
                        <button>report</button>
                      </MenuOptions>
                    )}
                  </button>
                </UserReplyTop>
                <UserReviewMain>
                  <ReadMore
                    text={
                      "Kopi susu is super yummy! Nice ambient and service! Come hang out! "
                    }
                  />
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>4</h4>
                      <HeartIcon />
                    </div>
                  </SocialBlock>
                </UserReviewFooter>
              </HeadRight>
            </CommentCard>
          </>
        )}
        {selectedOption == "Review" && (
          <CommentCardContent>
            <CommentCardImgBox>
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
                    Kopi susu is super yummy! Nice ambient and service! Come
                    hang out!
                  </p>
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>1.5k</h4>
                      <IconImg src={review} alt="review" />
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
        )}
        {selectedOption == "Lastest" && (
          <>
            <CommentCardContent>
              <CommentCardImgBox>
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
                      Kopi susu is super yummy! Nice ambient and service! Come
                      hang out!
                    </p>
                  </UserReviewMain>
                  <UserReviewFooter>
                    <h5>3 hour ago</h5>
                    <SocialBlock>
                      <div>
                        <h4>1.5k</h4>
                        <IconImg src={review} alt="review" />
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
            <CommentCard>
              <Head>
                <HeadShot src={headShotIcon} alt="headShot" />
                <BadgeBox>
                  <img width={22} src={badge} alt="badge" />
                </BadgeBox>
              </Head>
              <HeadRight>
                <UserReplyTop>
                  <span style={{ display: "block" }}>Ala</span>
                  <button onClick={toggleMenu}>
                    <Icon src={overflowIcon} alt="overflow" />
                    {isMenuOpen && (
                      <MenuOptions>
                        <button>delete</button>
                        <button>report</button>
                      </MenuOptions>
                    )}
                  </button>
                </UserReplyTop>
                <UserReviewMain>
                  <ReadMore
                    text={
                      "Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out! Kopi susu is super yummy! Nice ambient and service! Come hang out!"
                    }
                  />
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>4</h4>
                      <HeartIcon />
                    </div>
                  </SocialBlock>
                </UserReviewFooter>
              </HeadRight>
            </CommentCard>
            <CommentCard>
              <Head>
                <HeadShot src={headShotIcon} alt="headShot" />
                <BadgeBox>
                  <img width={22} src={badge} alt="badge" />
                </BadgeBox>
              </Head>
              <HeadRight>
                <UserReplyTop>
                  <span style={{ display: "block" }}>Ala</span>
                  <button onClick={toggleMenu}>
                    <Icon src={overflowIcon} alt="overflow" />
                    {isMenuOpen && (
                      <MenuOptions>
                        <button>delete</button>
                        <button>report</button>
                      </MenuOptions>
                    )}
                  </button>
                </UserReplyTop>
                <UserReviewMain>
                  <ReadMore
                    text={
                      "Kopi susu is super yummy! Nice ambient and service! Come hang out! "
                    }
                  />
                </UserReviewMain>
                <UserReviewFooter>
                  <h5>3 hour ago</h5>
                  <SocialBlock>
                    <div>
                      <h4>4</h4>
                      <HeartIcon />
                    </div>
                  </SocialBlock>
                </UserReviewFooter>
              </HeadRight>
            </CommentCard>
          </>
        )}
      </ReviewContent>
    </Reviews>
  );
}

export default HotReviews;
