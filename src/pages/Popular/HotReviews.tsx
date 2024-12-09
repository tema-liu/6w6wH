import { useState } from "react";
import badge from "../../assets/badge.png";
// import badge2 from "../../assets/badge2.png";
import headShotIcon from "../../assets/4d7a9ac84094d8ed9c205d7b69288815.jpg";
import { StarRating } from "../../component/StarRating";
import HeartIcon from "../../component/HeartIcon";
import { Tag } from "../../component/TagsBar";
import { ReadMore } from "../Reviews/ReadMore";
import {
  ChatIcon,
  Input,
  Label,
  Title,
  Reviews,
  ReviewContent,
  CommentCardContent,
  CommentCardImgBox,
  CommentCardDetail,
  Head,
  HeadRight,
  HeadShot,
  BadgeBox,
  UserReviewTop,
  UserReviewMain,
  SocialBlock,
  UserReviewFooter,
  Tags,
  CommentCard,
  MenuOptions,
  IconImg,
  UserReplyTop,
} from "./styled";

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
                        <ChatIcon className="material-symbols-outlined">
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
                    <IconImg className="material-symbols-outlined">
                      more_vert
                    </IconImg>
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
                    <IconImg className="material-symbols-outlined">
                      more_vert
                    </IconImg>
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
                      <ChatIcon className="material-symbols-outlined">
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
                        <ChatIcon className="material-symbols-outlined">
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
                    <IconImg className="material-symbols-outlined">
                      more_vert
                    </IconImg>
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
                    <IconImg className="material-symbols-outlined">
                      more_vert
                    </IconImg>
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
