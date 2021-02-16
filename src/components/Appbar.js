import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { makeStyles } from "@material-ui/core/styles";

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
  refresh: {
    width: '40px',
    height: '40px',
    color: theme.palette.fourth.main,
  },
}));

const  Appbar = (props) => {
  const classes = useStyles();

  return (
    <section>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" className={classes.root}>
          <Typography variant="h4" className={classes.typography}>News</Typography>
          <IconButton edge="end" aria-label="refresh" onClick={props.handleUpdate}>
            <RefreshIcon className={classes.refresh}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </section>
  );
}

export default Appbar;
