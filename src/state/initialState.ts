import Tapir from "../cards/CigCardTapir.svg"
import WildCat from "../cards/CigCardAmericanWildcat.svg"
import LightBrahma from "../cards/CigCardAmericanLightBrahma.svg"
import Giraffe from "../cards/CigCardGiraffe.svg"
import Zebu from "../cards/CigCardZebu.svg"
import Zebra from "../cards/CigCardZebra.svg"
import Deer from "../cards/CigCardVirginianDeer.svg"
import Yak from "../cards/CigCardYak.svg"
import Chickadee from "../cards/CigCardChickadee.svg"

export const totalMovements = 40;
export const availableCards = [
  {
    id: "1",
    type: "1",
    selected: false,
    discovered: false,
    imageUrl: Tapir
  },
  {
    id: "2",
    type: "1",
    selected: false,
    discovered: false,
    imageUrl: Tapir
  },
  {
    id: "3",
    type: "2",
    selected: false,
    discovered: false,
    imageUrl: WildCat
  },
  {
    id: "4",
    type: "2",
    selected: false,
    discovered: false,
    imageUrl: WildCat
  },
  {
    id: "5",
    type: "3",
    selected: false,
    discovered: false,
    imageUrl: LightBrahma
  },
  {
    id: "6",
    type: "3",
    selected: false,
    discovered: false,
    imageUrl: LightBrahma
  },
  {
    id: "7",
    type: "4",
    selected: false,
    discovered: false,
    imageUrl: Giraffe
  },
  {
    id: "8",
    type: "4",
    selected: false,
    discovered: false,
    imageUrl: Giraffe
  },
  {
    id: "9",
    type: "5",
    selected: false,
    discovered: false,
    imageUrl: Zebu
  },
  {
    id: "10",
    type: "5",
    selected: false,
    discovered: false,
    imageUrl: Zebu
  },
  {
    id: "11",
    type: "6",
    selected: false,
    discovered: false,
    imageUrl: Zebra
  },
  {
    id: "12",
    type: "6",
    selected: false,
    discovered: false,
    imageUrl: Zebra
  },
  {
    id: "13",
    type: "7",
    selected: false,
    discovered: false,
    imageUrl: Deer
  },
  {
    id: "14",
    type: "7",
    selected: false,
    discovered: false,
    imageUrl: Deer
  },
  {
    id: "15",
    type: "8",
    selected: false,
    discovered: false,
    imageUrl: Yak
  },
  {
    id: "16",
    type: "8",
    selected: false,
    discovered: false,
    imageUrl: Yak
  },
  {
    id: "17",
    type: "9",
    selected: false,
    discovered: false,
    imageUrl: Chickadee
  },
  {
    id: "18",
    type: "9",
    selected: false,
    discovered: false,
    imageUrl: Chickadee
  }
];

const initialState = {
  cards: [],
  totalMovements: totalMovements,
  movements: totalMovements,
  wonGame: false
};

export default initialState;
