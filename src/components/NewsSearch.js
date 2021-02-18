import React, { useEffect } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressWithLabel } from "./CircularStatic";

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

const Main = ({ handleUpdate, isLoading, loadingProcess, data }) => {
  const classes = useStyles();

  useEffect(() => {
    const timer = setInterval(() => { handleUpdate() }, 64000);
    
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
              <Link to={`/news/${item.id}`} className={classes.link}>
                <Item item={item} key={item.id} />
              </Link>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
export default Main;
