import React from "react";
import { useSelector } from 'react-redux';
import Item from './Item';
import { makeStyles } from "@material-ui/core/styles";
import store from '../store';

const useStyles = makeStyles((theme) => ({
   section: {

   }
}));

const Main = (props) => {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data);

  return (
    <section className={classes.section}>
      <ul>
        {(isLoading) ? <h3>Is loading</h3> : <h3>{data[0].by}</h3>}
      </ul>
    </section>
  );
}
export default Main;