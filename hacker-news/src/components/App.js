import React from 'react';
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Appbar from './Appbar';
import Main from './Main';
import { getNews } from '../actions';

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: '100vh',
  },
}));

const handleUpdate = (dispatch) => {
  dispatch(getNews());
} 

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data);
  const loadingProcess = useSelector((state) => state.loadingProcess);
  
  useEffect(() => {
    const timer = setInterval(() => { handleUpdate(dispatch) }, 64000);
    
    handleUpdate(dispatch);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Appbar handleUpdate={handleUpdate}/>
      <Main isLoading={isLoading} data={data} loadingProcess={loadingProcess}/>
   </div>
  );
}

export default App;
