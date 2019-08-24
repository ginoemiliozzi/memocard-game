import React, { useReducer } from "react";
import { reducer } from "../../state/reducer";
import { ActionsTypes, MemoryCard } from "../../state/actions";
import {
  Container,
  Grid,
  LinearProgress,
  Typography,
  Button,
  Paper,
  Box
} from "@material-ui/core";
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
  },
  startGame: {
    textAlign: "center",
    padding: 20
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
  const onStartGameClick = () => {
    dispatch({ type: ActionsTypes.START_GAME });
  };
  return (
    <Container>
      <Grid container>
        {cards.length > 0 ? (
          <Grid className={classes.movementsInfo} item xs={12}>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={movementsBar}
            />
            {movements > 0 ? (
              <Typography variant="h3">Movements left: {movements}</Typography>
            ) : (
              <Box className={classes.startGame}>
                <Typography variant="h3">Out of movements</Typography>
                {!wonGame && (
                  <Button
                    onClick={onStartGameClick}
                    variant="contained"
                    color="secondary"
                  >
                    Play again
                  </Button>
                )}
              </Box>
            )}
          </Grid>
        ) : (
          <Grid className={classes.startGame} item xs={12}>
            <Typography variant="h1" color="textSecondary">
              React memocard game
            </Typography>
            <Button
              onClick={onStartGameClick}
              variant="contained"
              color="secondary"
            >
              I want to play
            </Button>
          </Grid>
        )}

        {wonGame && (
          <Grid item className={classes.gameInfo} xs={12}>
            <Typography variant="h3">You win!</Typography>
            <Button
              onClick={onStartGameClick}
              variant="contained"
              color="secondary"
            >
              Play again
            </Button>
          </Grid>
        )}
        <Grid item xs={12}>
          <Board cards={cards} onCardSelect={onCardSelect} />
        </Grid>
      </Grid>
    </Container>
  );
}
