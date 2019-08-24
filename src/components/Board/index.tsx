import React from "react";
import Grid from "@material-ui/core/Grid";
import MemoCard from "../MemoCard";
import { makeStyles } from "@material-ui/styles";
import { GameState, MemoryCard } from "../../state/actions";

const useStyles = makeStyles({
  cardItem: {
    marginBottom: 100
  }
});

interface BoardProps extends Pick<GameState, "cards"> {
  onCardSelect: (c: MemoryCard) => void;
}

function Board({ cards, onCardSelect }: BoardProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={10}>
      {cards.map(c => (
        <Grid className={classes.cardItem} item xs={2} key={c.id}>
          <MemoCard {...c} onCardSelect={() => onCardSelect(c)} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Board;
