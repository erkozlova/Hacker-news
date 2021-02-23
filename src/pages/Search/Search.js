import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressWithLabel } from "./components/CircularProgressWithLabel";
import { Item } from "./components/Item";

const useStyles = makeStyles((theme) => ({
  sectionLoader: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  sectionNews: {
    display: "flex",
    justifyContent: "center",
  },
  sectionNotFound: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    width: "1000px",
    height: "100px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: theme.palette.third.main,
  },
  list: {
    padding: "0",
    marginTop: "20px",
  },
  notFound: {
    marginTop: "100px",
    color: theme.palette.third.main,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));

export const Search = ({ handleUpdate }) => {
  const classes = useStyles();

  const isLoading = useSelector((state) => state.list.isLoading);
  const data = useSelector((state) => state.list.data);
  const loadingProcess = useSelector((state) => state.list.loadingProcess);

  useEffect(() => {
    const timer = setInterval(() => {
      handleUpdate();
    }, 60000);

    handleUpdate();
    return () => {
      clearInterval(timer);
    };
  }, [handleUpdate]);

  if (isLoading) {
    return (
      <section className={classes.sectionLoader}>
        <CircularProgressWithLabel loadingProcess={loadingProcess} />
      </section>
    );
  }

  if (!data.length) {
    return (
      <section className={classes.sectionNotFound}>
        <Typography variant="h2" className={classes.notFound}>
          Not found
        </Typography>
      </section>
    );
  }

  return (
    <section className={classes.sectionNews}>
      <Container>
        <ul className={classes.list}>
          {data.map((item) => {
            return (
              <Link key={item.id} to={`/${item.id}`} className={classes.link}>
                <Item item={item} />
              </Link>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
