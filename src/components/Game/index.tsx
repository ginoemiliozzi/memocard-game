import React, { useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import { reducer } from "../../state/reducer";
import { ActionsTypes } from "../../state/actions";
import MemoCard from "../MemoCard";
import { Typography, LinearProgress, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardItem: {
    marginBottom: 100
  },
  movementsInfo: {
    padding: "0px 20px",
    marginTop: 20,
    backgroundColor: "lightcoral",
    borderRadius: 5
  },
  gameInfo: {
    textAlign: "center",
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "#B7EBD9"
  }
});

export default function Game() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalMovements, movements, cards, wonGame } = state;
  const movementsBar = (100 / totalMovements) * movements;
  return (
    <Container>
      <Grid container spacing={10}>
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
        {cards.map(c => (
          <Grid className={classes.cardItem} item xs={2} key={c.id}>
            <MemoCard
              {...c}
              onCardSelected={() =>
                dispatch({
                  type: ActionsTypes.CARD_SELECTED,
                  payload: c
                })
              }
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const totalMovements = 20;
const initialState = {
  cards: [
    {
      id: "1",
      type: "1",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/1/200/200"
    },
    {
      id: "2",
      type: "1",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/1/200/200"
    },
    {
      id: "3",
      type: "2",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/2/200/200"
    },
    {
      id: "4",
      type: "2",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/2/200/200"
    },
    {
      id: "5",
      type: "3",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/3/200/200"
    },
    {
      id: "6",
      type: "3",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/3/200/200"
    },
    {
      id: "7",
      type: "4",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/4/200/200"
    },
    {
      id: "8",
      type: "4",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/4/200/200"
    },
    {
      id: "9",
      type: "5",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/5/200/200"
    },
    {
      id: "10",
      type: "5",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/5/200/200"
    },
    {
      id: "11",
      type: "6",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/6/200/200"
    },
    {
      id: "12",
      type: "6",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/6/200/200"
    },
    {
      id: "13",
      type: "7",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/7/200/200"
    },
    {
      id: "14",
      type: "7",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/7/200/200"
    },
    {
      id: "15",
      type: "8",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/8/200/200"
    },
    {
      id: "16",
      type: "8",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/8/200/200"
    },
    {
      id: "17",
      type: "9",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/9/200/200"
    },
    {
      id: "18",
      type: "9",
      selected: false,
      discovered: false,
      imageUrl: "https://picsum.photos/id/9/200/200"
    }
  ],
  totalMovements: totalMovements,
  movements: totalMovements,
  wonGame: false
};
