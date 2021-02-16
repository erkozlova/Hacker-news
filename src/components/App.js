import React, { useEffect, useCallback } from "react";
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

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const isLoading = useSelector((state) => state.news.isLoading);
  const data = useSelector((state) => state.news.data);
  const loadingProcess = useSelector((state) => state.news.loadingProcess);


  const handleUpdate = useCallback(() => {
    dispatch(getNews());
  }, [dispatch]);
  
  useEffect(() => {
    const timer = setInterval(() => { handleUpdate() }, 64000);
    
    handleUpdate();
    return () => {
      clearInterval(timer);
    };
  }, [handleUpdate]);

  return (
    <div className={classes.app}>
      <Appbar handleUpdate={handleUpdate}/>
      <Main isLoading={isLoading} data={data} loadingProcess={loadingProcess}/>
   </div>
  );
}

export default App;
