import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import Assagai from "../../cards/CigCardAssagai.svg";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles({
  root: {
    padding: 30,
  },
  title: {
    fontFamily: "'Cinzel Decorative', cursive",
  },
  cardImage: {
    height: 550,
    marginBottom: 20,
    borderRadius: 60,
  },
});

interface WelcomeProps {
  startGame: () => void;
}

function Welcome({ startGame }: WelcomeProps) {
  const classes = useStyles();
  const [inView, setin] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setin(true)
    }, 1000);
  }, [])

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography className={classes.title} variant="h2">
        MEMOCARD GAME
      </Typography>
      <Typography className={classes.title} variant="subtitle2">
        made with react
      </Typography>
      <Grow in={inView}>
        <img className={classes.cardImage} src={Assagai} alt="memogame" />
      </Grow>
      <Button onClick={startGame} variant="contained" color="secondary">
        Let's play
      </Button>
    </Grid>
  );
}

export default Welcome;
