import React, { useReducer } from "react";
import { reducer } from "../../state/reducer";
import { ActionsTypes, MemoryCard } from "../../state/actions";
import { Container, Grid, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import initialState from "../../state/initialState";
import Board from "../Board";
import Welcome from "../Welcome/Welcome";

const useStyles = makeStyles({
  movementsInfo: {
    padding: "0px 20px",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#68e85f",
    borderRadius: 5,
  },
  gameInfo: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#B7EBD9",
  },
  header: {
    textAlign: "center",
    height: 150,
  },
  statusMessage: {
    marginBottom: 5
  }
});

export default function Game() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalMovements, movements, cards, wonGame } = state;
  const movementsBar = (100 / totalMovements) * movements;
  const gameStatusMessage = wonGame
    ? "You did it!"
    : movements > 1
    ? `You have ${movements} movements left`
    : movements > 0 
    ? `You have ${movements} movement left`
    : "Try again, you can do it...";

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
              style={{ height: 30, width: movementsBar + "%" }}
            />
            <Box className={classes.header}>
              <Typography className={classes.statusMessage} variant="h4">{gameStatusMessage}</Typography>
              {movements <= 0 && (
                <Button
                  onClick={onStartGameClick}
                  variant="contained"
                  color="secondary"
                >
                  Play again
                </Button>
              )}
            </Box>
          </Grid>
        ) : (
          <Welcome startGame={onStartGameClick} />
        )}
        <Grid item xs={12}>
          <Board cards={cards} onCardSelect={onCardSelect} />
        </Grid>
      </Grid>
    </Container>
  );
}
