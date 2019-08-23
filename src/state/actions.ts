export interface Action {
  type: ActionsTypes;
  payload: any;
}

export enum ActionsTypes {
  CARD_SELECTED
}

export interface GameState {
  cards: MemoryCard[];
  movements: number;
}
export interface MemoryCard {
  id: string;
  type: string;
  selected: boolean;
  discovered: boolean;
  imageUrl: string;
}
