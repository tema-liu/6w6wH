import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { AddPlaceList, Location } from "../type/type";
import EmptyDisplay from "../component/EmptyDisplay";
import { GeneralPopupModal } from "../component/PopupModel/PopupModal";
import { useNavigate } from "react-router-dom";

type NearbyProps = {
  location: Location;
  setPlaceList: (places: AddPlaceList[]) => void;
};

const NearbyPlaces = ({ location, setPlaceList }: NearbyProps) => {
  const navigator = useNavigate();
  const map = useMap(); // 獲取地圖實例
  const placesLib = useMapsLibrary("places"); // 加載 places 庫
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!placesLib || !map) return;

    const placesService = new placesLib.PlacesService(map);

    const request = {
      location: location,
      radius: 100,
      // rankBy: google.maps.places.RankBy.DISTANCE,
      language: "zh-TW",
      type: "restaurant",
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const filteredResults = results.map((place) => {
          //取得
          const city = place.plus_code?.compound_code?.slice(
            place.plus_code?.compound_code?.indexOf("台灣") + 2,
            place.plus_code?.compound_code?.indexOf("台灣") + 5
          );
          const photoImg = place.photos?.length
            ? place.photos.map((photo) => {
                return photo.getUrl({ maxWidth: 600 });
              })
            : [];
          return {
            location: place.geometry!.location!.toJSON(),
            photos: photoImg,
            placeId: place.place_id || "unknown", // 添加預設值
            displayName: place.name || "未命名地點",
            address: `${city}${place.vicinity}`, // 如果沒有地址則顯示替代文本
          };
        });

        setPlaceList(filteredResults);
      } else {
        setError(true);
      }
    });
  }, [placesLib, map]);

  if (error) {
    return (
      <GeneralPopupModal
        onClose={() => {
          setError(!error);
          navigator(0);
        }}
        isActive={error}
        canActive={true}
        content={
          <EmptyDisplay
            showButton={false}
            $isIconDark={true}
            content="There are no landmarks here"
            children={
              <h5 style={{ color: "#7F7F7F", textAlign: "center" }}>
                You can try to zoom in on the map
              </h5>
            }
          />
        }
      />
    );
  }

  return null;
};

export default NearbyPlaces;
