import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 16px;
  box-shadow: 0px 4px 16px 4px #0000000a, 0px 2px 8px 0px #0000001a;
  display: flex;
  position: relative;
  margin-bottom: 16px;
`;
export const HeadShot = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px 0 0 16px;
`;
export const Content = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;
export const AreaLabel = styled.div`
  padding: 8px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  display: flex;
`;
export const AreaBox = styled.div`
  padding-right: 6px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray400};
  display: inline-flex;
  column-gap: 4px;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export const Profile = styled.div`
  width: 100%;
`;
export const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.38px;
`;
export const Message = styled.div`
  padding-top: 8px;
`;
export const Button = styled.button`
  position: absolute;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.outline3};
  box-shadow: 0px 0px 4px 0px #00000033, 0px 0px 8px 0px #0000001a;
  border-radius: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  column-gap: 8px;
  bottom: 16px;
  left: -16px;
`;

type FollowBtnProps = {
  $isFollowing: boolean;
};

export const FollowBtn = styled(Button)<FollowBtnProps>`
  opacity: ${({ $isFollowing }) => ($isFollowing ? 0.75 : 1)};
`;

export const AreaMarquee = styled.div`
  padding-left: 6px;
  width: 100%;
  display: flex;
  overflow: hidden;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2px;
  align-items: center;
  overflow: hidden;
  margin-left: 8px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
`;
