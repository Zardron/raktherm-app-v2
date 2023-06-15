import Socket from "../../../ProductRanges/PPR/Socket";
import ReducerSocket from "../../../ProductRanges/PPR/ReducerSocket";
import Elbow90 from "../../../ProductRanges/PPR/Elbow90";
import Elbow45 from "../../../ProductRanges/PPR/Elbow45";
import ElbowReducer from "../../../ProductRanges/PPR/ElbowReducer";
import SpigotElbow90 from "../../../ProductRanges/PPR/SpigotElbow90";
import EqualTee from "../../../ProductRanges/PPR/EqualTee";
import ReducingTee from "../../../ProductRanges/PPR/ReducingTee";
import EndCap from "../../../ProductRanges/PPR/EndCap";
import CrossTee from "../../../ProductRanges/PPR/CrossTee";
import FemaleUnion from "../../../ProductRanges/PPR/FemaleUnion";
import SaddleSocket from "../../../ProductRanges/PPR/SaddleSocket";
import FlangesAdaptor from "../../../ProductRanges/PPR/FlangesAdaptor";
import EndPlugLong from "../../../ProductRanges/PPR/EndPlugLong";
import EndPlugShort from "../../../ProductRanges/PPR/EndPlugShort";
import OverBridgeBow from "../../../ProductRanges/PPR/OverBridgeBow";
import OverBridgeBowSmart from "../../../ProductRanges/PPR/OverBridgeBowSmart";
import BracketForPipe from "../../../ProductRanges/PPR/BracketForPipe";
import BracketWithClamp from "../../../ProductRanges/PPR/BracketWithClamp";
import ClampForPipe from "../../../ProductRanges/PPR/ClampForPipe";
import Bend from "../../../ProductRanges/PPR/Bend";
import Manifold from "../../../ProductRanges/PPR/Manifold";
import PPRBallValve from "../../../ProductRanges/PPR/PPRBallValve";
import TransitionPieceRoundFemale from "../../../ProductRanges/PPR/TransitionPieceRoundFemale";
import TransitionPieceRoundFemaleWithHexagon from "../../../ProductRanges/PPR/TransitionPieceRoundFemaleWithHexagon";
import TransitionPieceRoundMale from "../../../ProductRanges/PPR/TransitionPieceRoundMale";
import TransitionPPRFemaleUnionBrassWithRibs from "../../../ProductRanges/PPR/TransitionPPRFemaleUnionBrassWithRibs";
import TransitionPPRMaleUnionBrassWithRibs from "../../../ProductRanges/PPR/TransitionPPRMaleUnionBrassWithRibs";
import TransitionPPRFemaleUnion from "../../../ProductRanges/PPR/TransitionPPRFemaleUnion";
import TransitionPPRMaleUnion from "../../../ProductRanges/PPR/TransitionPPRMaleUnion";
import TransitionPieceRoundMaleWithHexagonSocket from "../../../ProductRanges/PPR/TransitionPieceRoundMaleWithHexagonSocket";
import TransitionFemaleTee from "../../../ProductRanges/PPR/TransitionFemaleTee";
import ValveBody from "../../../ProductRanges/PPR/ValveBody";
import TransitionElbowFemale from "../../../ProductRanges/PPR/TransitionElbowFemale";
import TransitionElbowMale from "../../../ProductRanges/PPR/TransitionElbowMale";

export const FITTINGS_DATA = [
  {
    id: "1",
    title: "SOCKET",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/s1.png",
    content: <Socket />,
  },
  {
    id: "2",
    title: "REDUCER SOCKET",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/r1.png",
    content: <Socket />,
  },
  {
    id: "3",
    title: "ELBOW 90°",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/e1.png",
    content: <Socket />,
  },
  {
    id: "4",
    title: "ELBOW 45°",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/e3.png",
    content: <Socket />,
  },
  {
    id: "5",
    title: "ELBOW REDUCER",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/re1.png",
    content: <Socket />,
  },
  {
    id: "6",
    title: "SPIGOT ELBOW 90°",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/se1.png",
    content: <Socket />,
  },
  {
    id: "7",
    title: "EQUAL TEE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/t1.png",
    content: <Socket />,
  },
  {
    id: "8",
    title: "REDUCING TEE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/t2.png",
    content: <Socket />,
  },
  {
    id: "9",
    title: "END CAP",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/c.png",
    content: <Socket />,
  },
  {
    id: "10",
    title: "CROSS TEE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/x.png",
    content: <Socket />,
  },
  {
    id: "11",
    title: "FEMALE UNION BOTH ENDS WELDING",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/uf2.png",
    content: <Socket />,
  },
  {
    id: "12",
    title: "SADDLE SOCKET",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/sds1.png",
    content: <Socket />,
  },
  {
    id: "13",
    title: "FLANGES ADAPTOR",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/fsa.png",
    content: <Socket />,
  },
  {
    id: "14",
    title: "END PLUG (SHORT BODY)",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/c1.jpg",
    content: <Socket />,
  },
  {
    id: "15",
    title: "END PLUG (LONG BODY)",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/c2.png",
    content: <Socket />,
  },
  {
    id: "16",
    title: "OVER BRIDGE BOW",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/b.png",
    content: <Socket />,
  },
  {
    id: "17",
    title: "(SMART) OVER BRIDGE BOW",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/obb.png",
    content: <Socket />,
  },
  {
    id: "18",
    title: "BRACKET FOR PIPE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/bt.png",
    content: <Socket />,
  },
  {
    id: "19",
    title: "BRACKET WITH CLAMP",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/btc.png",
    content: <Socket />,
  },
  {
    id: "20",
    title: "CLAMP FOR PIPE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/btc.png",
    content: <Socket />,
  },
  {
    id: "21",
    title: "BEND",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/be.png",
    content: <Socket />,
  },
  {
    id: "22",
    title: "PPR MANIFOLD",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/mnf.png",
    content: <Socket />,
  },
  {
    id: "23",
    title: "PPR BALL VALVE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/ppbv.png",
    content: <Socket />,
  },
  {
    id: "24",
    title: "TRANSITION PIECE ROUND-FEMALE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/af.png",
    content: <Socket />,
  },
  {
    id: "25",
    title: "TRANSITION PIECE ROUND-FEMALE WITH HEXAGON SOCKET",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/af1.png",
    content: <Socket />,
  },
  {
    id: "26",
    title: "TRANSITION PIECE ROUND-MALE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/am.png",
    content: <Socket />,
  },
  {
    id: "27",
    title: "TRANSITION PPR MALE UNION BRASS WITH RIBS",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/tum3.png",
    content: <Socket />,
  },
  {
    id: "28",
    title: "TRANSITION PPR FEMALE UNION BRASS WITH RIBS",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/tuf3.png",
    content: <Socket />,
  },
  {
    id: "29",
    title: "TRANSITION PPR MALE UNION",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/tum2.jpg",
    content: <Socket />,
  },
  {
    id: "30",
    title: "TRANSITION PPR FEMALE UNION",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/tuf2.jpg",
    content: <Socket />,
  },
  {
    id: "31",
    title: "TRANSITION PIECE ROUND-MALE WITH HEXAGON SOCKET",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/am1.png",
    content: <Socket />,
  },
  {
    id: "32",
    title: "TANK CONNECTOR",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/tcm.png",
    content: <Socket />,
  },
  {
    id: "33",
    title: "TRANSITION FEMALE TEE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/t3.jpg",
    content: <Socket />,
  },
  {
    id: "34",
    title: "VALVE BODY",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/v4.png",
    content: <Socket />,
  },
  {
    id: "35",
    title: "TRANSITION ELBOW FEMALE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/e6.png",
    content: <Socket />,
  },
  {
    id: "36",
    title: "WALL MOUNT ELBOW",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/e5.png",
    content: <Socket />,
  },
  {
    id: "37",
    title: "TRANSITION ELBOW MALE",
    imgSrc:
      "https://www.raktherm.com/mobile_images/product_ranges/PPR_IMAGES/e7.png",
    content: <Socket />,
  },
];
