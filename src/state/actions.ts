export interface Action {
  type: ActionsTypes;
  payload?: any;
}

export enum ActionsTypes {
  CARD_SELECTED,
  START_GAME
}

export interface GameState {
  cards: MemoryCard[];
  totalMovements: number;
  movements: number;
  wonGame: boolean;
}
export interface MemoryCard {
  id: string;
  type: string;
  selected: boolean;
  discovered: boolean;
  imageUrl: string;
}
