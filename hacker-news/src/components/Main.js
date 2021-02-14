import React from "react";
import Item from './Item';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   section: {

   }
}));

const Main = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <ul>
        {/* {props.news.map((item) => {
          return (<Item />);
        })} */}
      </ul>
    </section>
  );
}
export default Main;