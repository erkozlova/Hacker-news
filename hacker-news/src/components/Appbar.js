import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  typography: {
    color: 'black',
    fontSize: '20px',
  },
  refresh: {
    
  }
}));

function Appbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function clickButton() {
    // console.log('hi');
    dispatch({type: 'bla'});
  }

  return (
    <section>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar variant="dense" className={classes.root}>
            <div className={classes.wrapper}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"  
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.typography}>News</Typography>
            </div>
            <IconButton
              edge='end'
              aria-label="refresh"  
              onClick={clickButton}
            >
              <RefreshIcon className={classes.refresh} />
            </IconButton>
          </Toolbar>
        </AppBar>
    </section>
  );
}

export default Appbar;
