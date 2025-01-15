import {
  ContainerPd16,
  Wrapper,
} from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import ProfileCard from "../../component/Profile/ProfileCard";
import ReviewListItem from "../../component/Profile/ReviewListItem";
import { useEffect } from "react";
import { getProfileCollect } from "../../apis/getProfileCollect";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";

function Profile() {
  const token = useSelector((state: RootState) => state.auth.token);
  const id = useSelector((state: RootState) => state.auth.userId);
  useEffect(() => {
    const fetchData = async () => {
      const collectList = await getProfileCollect(id, token);
    };
  }, []);

  return (
    <Wrapper>
      <Header isBefore={false} menu={true} />
      <ContainerPd16 style={{ display: "flex", flexDirection: "column" }}>
        <ProfileCard isUserProfile={true} />
        <ReviewListItem />
      </ContainerPd16>
    </Wrapper>
  );
}

export default Profile;
