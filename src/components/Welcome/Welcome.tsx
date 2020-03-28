import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
      padding: 30
  },
  title: {
    fontFamily: "'Cinzel Decorative', cursive",
  },
});

interface WelcomeProps {
  startGame: () => void;
}

function Welcome({ startGame }: WelcomeProps) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
      md={12}
    >
      <Typography className={classes.title} variant="h2">
        MEMOCARD GAME
        <Typography className={classes.title} variant="subtitle2">
          made with react
        </Typography>
      </Typography>
      <Button onClick={startGame} variant="contained" color="secondary">
        Let's play
      </Button>
    </Grid>
  );
}

export default Welcome;
