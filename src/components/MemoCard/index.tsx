import React from "react";
import { MemoryCard } from "../../state/actions";
import { Card } from "@material-ui/core";
import { useSpring, animated as a } from "react-spring";
import { makeStyles } from "@material-ui/styles";
import Assagai from "../../cards/CigCardAssagai.svg"

const useStyles = makeStyles({
  card: {
    position: "absolute",
    maxWidth: "180px",
    maxHeight: "180px",
    width: "80ch",
    height: "80ch",
    cursor: "pointer",
    willChange: "transform, opacity",
    backgroundSize: "cover"
  },
  front: {
    border: "1px solid black",
    backgroundImage: `url(${Assagai})`
  }
});

interface MemoryCardProps extends MemoryCard {
  onCardSelect: () => void;
}
function MemoCard({
  onCardSelect,
  selected,
  discovered,
  imageUrl
}: MemoryCardProps) {
  const classes = useStyles();

  const revealed = selected || discovered;
  const { transform, opacity } = useSpring({
    opacity: revealed ? 1 : 0,
    transform: `perspective(600px) rotateX(${revealed ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <Card onClick={onCardSelect}>
      <a.div
        className={`${classes.card} ${classes.front}`}
        style={{
          opacity: opacity.interpolate(o => (o === 1 ? 0 : 1)),
          transform
        }}
      />
      {revealed && <a.div
        className={classes.card}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      />}
    </Card>
  );
}

export default MemoCard;
