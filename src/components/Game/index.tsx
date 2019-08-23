import React, { useReducer } from "react";
import { reducer } from "../../state/reducer";
import { ActionsTypes, MemoryCard } from "../../state/actions";
import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import initialState, { availableCards } from "../../state/initialState";
import Board from "../Board";

const useStyles = makeStyles({
  movementsInfo: {
    padding: "0px 20px",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "lightcoral",
    borderRadius: 5
  },
  gameInfo: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#B7EBD9"
  }
});

export default function Game() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalMovements, movements, cards, wonGame } = state;
  const movementsBar = (100 / totalMovements) * movements;
  const onCardSelect = (card: MemoryCard) => {
    dispatch({ type: ActionsTypes.CARD_SELECTED, payload: card });
  };
  return (
    <Container>
      <Grid container>
        <Grid className={classes.movementsInfo} item xs={12}>
          <LinearProgress
            color="secondary"
            variant="determinate"
            value={movementsBar}
          />
          {movements > 0 ? (
            <Typography variant="h3">Movements left: {movements}</Typography>
          ) : (
            <Typography variant="h3">Out of movements</Typography>
          )}
        </Grid>

        {wonGame && (
          <Grid item className={classes.gameInfo} xs={12}>
            <Typography variant="h3">You win!</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Board cards={cards} onCardSelect={onCardSelect} />
        </Grid>
      </Grid>
    </Container>
  );
}
