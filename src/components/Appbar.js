import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";

const pathsMap = {
  "/": {icon: 'refresh'},
};

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
  back: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.fourth.main,
    borderRadius: '4px',
  },
}));

const  Appbar = (props) => {
  const classes = useStyles();
  const location = useLocation().pathname;

  const icon = (pathsMap[location] ? pathsMap[location] : {}).icon;

  return (
    <section>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" className={classes.root}>
          <Typography variant="h4" className={classes.typography}>News</Typography>
          {icon === 'refresh'? 
            <IconButton edge="end" aria-label="refresh" onClick={props.handleUpdate}>
              <RefreshIcon className={classes.refresh}/>
            </IconButton> :
            <Link to='/'>
              <IconButton edge="end" aria-label="refresh">
                <ArrowBackIcon fontSize='large' className={classes.back}/>
              </IconButton>
            </Link>
          }
        </Toolbar>
      </AppBar>
    </section>
  );
}

export default Appbar;
