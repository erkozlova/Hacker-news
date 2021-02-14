import React from "react";
import { useDispatch } from 'react-redux';
import Appbar from './Appbar';
import Main from './Main';
import { getNews } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getNews());
  });

  return (
    <>
      <Appbar />
      <Main />
   </>
  );
}

export default App;
