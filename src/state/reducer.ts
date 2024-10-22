import { GameState, Action, ActionsTypes, MemoryCard } from "./actions";
import { availableCards, totalMovements } from "./initialState";
import _ from "lodash";

export const reducer = (prevState: GameState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.CARD_SELECTED:
      const { cards, movements } = prevState;
      if (movements === 0) return prevState;
      const selectedCards = cards.filter(c => c.selected);
      const clickedCard = action.payload;
      if (
        selectedCards.some(c => c.id === clickedCard.id) ||
        cards.filter(c => c.discovered).some(c => c.id === clickedCard.id)
      )
        return prevState;
      if (selectedCards.length === 2) {
        if (selectedCards[0].type === selectedCards[1].type) {
          const newCards = discoverSelectedPair(cards);
          if (wonGame(newCards, clickedCard)) {
            return {
              ...prevState,
              wonGame: true,
              movements: movements - 1,
              cards: newCards.map(c => {
                return { ...c, selected: false, discovered: true };
              })
            };
          } else {
            return {
              ...prevState,
              movements: movements - 1,
              cards: selectCard(newCards, clickedCard.id)
            };
          }
        } else {
          return {
            ...prevState,
            movements: movements - 1,
            cards: selectCard(unselectCards(cards), clickedCard.id)
          };
        }
      } else {
        return {
          ...prevState,
          movements: movements - 1,
          cards: selectCard(cards, clickedCard.id)
        };
      }
    case ActionsTypes.START_GAME:
      const shuffledCards = _.shuffle(availableCards);
      return {
        ...prevState,
        wonGame: false,
        movements: totalMovements,
        cards: shuffledCards
      };
    default:
      return prevState;
  }
};

const selectCard = (cards: MemoryCard[], cardId: string): MemoryCard[] => {
  return cards.map(c => {
    return c.id === cardId ? { ...c, selected: true } : c;
  });
};

const discoverSelectedPair = (cards: MemoryCard[]): MemoryCard[] => {
  return cards.map(c => {
    return c.selected ? { ...c, selected: false, discovered: true } : c;
  });
};

const unselectCards = (cards: MemoryCard[]): MemoryCard[] => {
  return cards.map(c => {
    return { ...c, selected: false };
  });
};

const wonGame = (cards: MemoryCard[], clickedCard: MemoryCard): boolean => {
  return cards
    .filter(c => c.type !== clickedCard.type)
    .every(c => c.discovered);
};
