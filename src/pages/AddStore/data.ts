import { Location } from "../../type/type";

export type StationAndLocation = {
  station: string;
  location: Location;
};
type Regions = {
  North: StationAndLocation[];
  Center: StationAndLocation[];
  South: StationAndLocation[];
  East: StationAndLocation[];
};

export const locationList: Regions = {
  North: [
    {
      station: "Yilan",
      location: { lat: 24.755290399612942, lng: 121.75864339503407 }, // 宜蘭火車站
    },
    {
      station: "Keelung",
      location: { lat: 25.132672935963832, lng: 121.73943673443881 }, // 基隆火車站
    },
    {
      station: "Taipei",
      location: { lat: 25.048936637070433, lng: 121.51762311005317 }, // 台北車站
    },
    {
      station: "Taoyuan",
      location: { lat: 24.99035919593992, lng: 121.31669305168387 }, // 桃園火車站
    },
    {
      station: "Hsinchu",
      location: { lat: 24.802503188079996, lng: 120.97149174064135 }, // 新竹火車站
    },
  ],
  Center: [
    {
      station: "Taichung ",
      location: { lat: 24.13748373865385, lng: 120.68730058252946 }, // 台中火車站
    },
    {
      station: "Changhua",
      location: { lat: 24.081750004084636, lng: 120.53834892977093 }, // 彰化火車站
    },
    {
      station: "Nantou",
      location: { lat: 23.90481005838996, lng: 120.68899239479673 }, // 南投轉運站 (無火車站)
    },
    {
      station: "Miaoli",
      location: { lat: 24.570166360623087, lng: 120.82274533135931 }, // 苗栗火車站
    },
  ],
  South: [
    {
      station: "Tainan ",
      location: { lat: 22.997267287278362, lng: 120.21306168437219 }, // 台南火車站
    },
    {
      station: "Kaohsiung ",
      location: { lat: 22.639571596348556, lng: 120.30293704759522 }, // 高雄火車站
    },
    {
      station: "Chiayi ",
      location: { lat: 23.47925828687708, lng: 120.44111737300678 }, // 嘉義火車站
    },
    {
      station: "Pingtung",
      location: { lat: 22.669077729314296, lng: 120.48605744414617 }, // 屏東火車站
    },
  ],
  East: [
    {
      station: "Hualien",
      location: { lat: 23.992982308510783, lng: 121.60194268785244 }, // 花蓮火車站
    },
    {
      station: "Taitung",
      location: { lat: 22.793904625683854, lng: 121.12308786716738 }, // 台東火車站
    },
  ],
};
