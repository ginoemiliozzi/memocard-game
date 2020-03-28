import React, { useReducer } from "react";
import { reducer } from "../../state/reducer";
import { ActionsTypes, MemoryCard } from "../../state/actions";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import initialState from "../../state/initialState";
import Board from "../Board";
import Welcome from "../Welcome/Welcome";

const useStyles = makeStyles({
  movementsInfo: {
    padding: "0px 20px",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "lightcoral",
    borderRadius: 5,
  },
  gameInfo: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#B7EBD9",
  },
  startGame: {
    textAlign: "center",
    padding: 20,
  },
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
          <Grid item xs={12}>
            <div
              className={classes.movementsInfo}
              style={{ width: movementsBar + "%" }}
            >
              {movements > 0 ? (
                <Typography variant="h3">
                  Movements left: {movements}
                </Typography>
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
            </div>
          </Grid>
        ) : (
          <Welcome startGame={onStartGameClick} />
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
