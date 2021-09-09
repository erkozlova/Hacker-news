import React, { FC } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dateFormat } from "../../../utils/dateFormat";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.third.main,
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "5px",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  time: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));

type Props = {
  item: {
    score: number;
    title: string;
    by: string;
    time: number;
  }
}

// Компонента карточки новости в списке
export const Item: FC<Props> = ({ item }) => {
  const classes = useStyles();

  return (
    <article className={classes.container}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={1}
          container
          alignItems="center"
          justify="center"
        >
          <Typography component="span">{item.score}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5" className={classes.title} gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="subtitle2">
            {`Author: ${item.by}`}
          </Typography>
        </Grid>
        <Grid item xs={2} container alignItems="center" justify="center">
          <Typography component="span" className={classes.time}>
            {dateFormat(item.time)}
          </Typography>
        </Grid>
      </Grid>
    </article>
  );
};
