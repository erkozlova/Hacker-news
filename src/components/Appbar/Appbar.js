import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "./components/Icon";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  typography: {
    color: theme.palette.fourth.main,
  },
}));

export const Appbar = ({ handleUpdate }) => {
  const classes = useStyles();

  return (
    <section>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" className={classes.root}>
          <Typography variant="h4" className={classes.typography}>
            News
          </Typography>
          <Icon handleUpdate={handleUpdate} />
        </Toolbar>
      </AppBar>
    </section>
  );
};
