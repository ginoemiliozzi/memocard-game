import React from "react";
import { MemoryCard } from "../../state/actions";
import { Card } from "@material-ui/core";
import { useSpring, animated as a } from "react-spring";
import { makeStyles } from "@material-ui/styles";

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
    backgroundImage: `url(
      "https://static.vecteezy.com/system/resources/thumbnails/000/554/486/small/question_mark_001.jpg"
    )`
  }
});

interface MemoryCardProps extends MemoryCard {
  onCardSelected: () => void;
}
function MemoCard({
  onCardSelected,
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
    <Card onClick={onCardSelected}>
      <a.div
        className={`${classes.card} ${classes.front}`}
        style={{
          opacity: opacity.interpolate(o => (o === 1 ? 0 : 1)),
          transform
        }}
      />
      <a.div
        className={classes.card}
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      />
    </Card>
  );
}

export default MemoCard;
