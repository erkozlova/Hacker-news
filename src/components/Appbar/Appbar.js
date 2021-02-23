import React from "react";
import { Link } from "react-router-dom";
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
  logo: {
    color: theme.palette.fourth.main,
  },
  link: {
    textDecoration: 'none',
  },
}));

export const Appbar = ({ handleUpdate }) => {
  const classes = useStyles();

  return (
    <section>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" className={classes.root}>
          <Typography variant="h4" className={classes.logo}>
            <Link to="/" className={classes.link}>
              News
            </Link>
          </Typography>
          <Icon handleUpdate={handleUpdate} />
        </Toolbar>
      </AppBar>
    </section>
  );
};
