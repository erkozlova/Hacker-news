import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Appbar from './Appbar';
import Main from './Main';
import theme from '../theme/theme';
import api from '../utils/api';


const App = () => {

  const testApi = () => {
    api.getNewsList().then((data) => { 
      const news=data.slice(0,100);
      let newsData = [];
      news.forEach((item) => {
        api.getNews(item).then((data) => {
          newsData.push(data);
        });
      })
      console.log(newsData);
    });
  };

  testApi();

  return (
    <>
    <ThemeProvider theme={theme}>
    <Appbar />
    <Main />
    </ThemeProvider>
   </>
  );
}

export default App;
