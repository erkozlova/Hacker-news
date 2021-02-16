import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { dateFormat } from "../utils/dateFormat";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.third.main,
    display: "flex",
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    border: "solid 2px #000",
    borderRadius: "5px",
    justifyContent: 'space-between',
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "100px",
    borderRight: "solid 1px #000",
    marginRight: "20px",
  },
  wrapper: {
    display: 'flex',
  },
  title: {
    marginTop: '10px',
  },
  describe: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  time: {
    marginRight: '10px',
    marginTop: '10px',
  },
  author: {
    marginBottom: '10px',
  },
}));

const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.rating}>
          <Typography component="span">
            {item.score}
          </Typography>
        </div>
        <div className={classes.describe}>
          <Typography variant="h5" className={classes.title}>
            {item.title}
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.author}
          >{`Author: ${item.by}`}</Typography>
        </div>
      </div>
      <Typography component="span" className={classes.time}>
        {dateFormat(item.time)}
      </Typography>
    </div>
  );
};

export default Item;
