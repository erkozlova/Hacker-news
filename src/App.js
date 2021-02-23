import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "./components/Appbar/Appbar";
import { Search } from "./pages/Search/Search";
import { Item } from "./pages/Item/Item";
import { getList } from "./actions";

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
  },
}));

export const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // Получение списка новостей
  const handleUpdate = useCallback(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Appbar handleUpdate={handleUpdate} />
      <Switch>
        <Route exact path="/">
          <Search handleUpdate={handleUpdate} />
        </Route>
        <Route path="/:id">
          <Item />
        </Route>
      </Switch>
    </div>
  );
};
