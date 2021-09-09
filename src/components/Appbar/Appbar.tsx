import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "./components/Icon";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.dark,
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    color: theme.palette.secondary.dark,
  },
  link: {
    textDecoration: 'none',
  },
}));

type Props = {
  handleUpdate: () => void;
}

export const Appbar: FC<Props> = ({ handleUpdate }) => {
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
