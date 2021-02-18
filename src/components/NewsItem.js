import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import { dateFormat } from "../utils/dateFormat";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: " 50px auto 0",
    width: "90%",
    backgroundColor: theme.palette.third.main,
    borderRadius: "6px",
  },
  title: {
    width: "80%",
    paddingTop: "30px",
    marginLeft: "30px",
    borderBottom: "solid 2px #000",
  },
}));

const News = ({ handleGetNews, item }) => {
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    handleGetNews(Number(id));
  }, [handleGetNews, id]);

  if (!Object.keys(item).length) {
    return null;
  }

  return (
    <Container>
      <section className={classes.section}>
        <Typography component="span">{item.score}</Typography>
        <Typography variant="h3" className={classes.title}>
          {item.title}
        </Typography>
        <Typography variant="h6">{`Author: ${item.by}`}</Typography>
        <Typography component="span" className={classes.time}>
          {dateFormat(item.time)}
        </Typography>
      </section>
    </Container>
  );
};

export default News;
