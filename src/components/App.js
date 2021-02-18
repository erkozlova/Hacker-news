import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from './Appbar';
import NewsSearch from './NewsSearch';
import NewsItem from './NewsItem';
import { getNewsList, getNewsItem } from '../actions';

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: '100vh',
  },
}));

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const isLoading = useSelector((state) => state.newsList.isLoading);
  const data = useSelector((state) => state.newsList.data);
  const loadingProcess = useSelector((state) => state.newsList.loadingProcess);

  const newsItem = useSelector((state) => state.newsItem.data);

  const handleGetNews = useCallback((id) => {
    dispatch(getNewsItem(id));
  }, [dispatch]);

  const handleUpdate = useCallback(() => {
    dispatch(getNewsList());
  }, [dispatch]);
  
  return (
    <div className={classes.app}>
      <Appbar handleUpdate={handleUpdate}/>
      <Switch>
        <Route exact path='/'>
          <NewsSearch isLoading={isLoading} data={data} loadingProcess={loadingProcess} handleUpdate={handleUpdate}/>
        </Route>
        <Route path='/news/:id'>
          <NewsItem handleGetNews={handleGetNews} item={newsItem}></NewsItem>
        </Route>
      </Switch>
   </div>
  );
}

export default App;
