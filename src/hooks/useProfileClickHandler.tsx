import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../utils/redux/store";

const useProfileClickHandler = () => {
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.auth.userId);

  return (id: number) => {
    if (id === userId) {
      navigate("/profile");
    } else {
      navigate(`/otherProfile/${id}`);
    }
  };
};

export default useProfileClickHandler;
