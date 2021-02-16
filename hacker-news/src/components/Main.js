import React from "react";
import Item from './Item';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressWithLabel } from "./CircularStatic";

const useStyles = makeStyles((theme) => ({
  sectionLoader: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  sectionNews: {
    display: 'flex',
    justifyContent: 'center',
  },
  sectionNotFound: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    width: "1000px",
    height: "100px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: theme.palette.third.main,
  },
  list: {
    padding: '0',
  },
  notFound: {
    marginTop:'100px',
    color: theme.palette.third.main,
  }
}));

const Main = (props) => {
  const classes = useStyles();

  if (props.isLoading) {
    return (
      <section className={classes.sectionLoader}>
        <CircularProgressWithLabel loadingProcess={props.loadingProcess} />
      </section>
    );
  };
  if (props.data.length) {
    return (
      <section className={classes.sectionNews}>
        <ul className={classes.list}>
          {
            props.data.map((item) => {
              return (<Item item={item} key={item.id}/>); 
            })
          }
        </ul> 
      </section>
    );
  }
  return (
    <section className={classes.sectionNotFound}>
      <Typography variant="h2" className={classes.notFound}>Not found</Typography>
    </section>
  );
};
export default Main;
