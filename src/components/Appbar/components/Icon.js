import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const pathsMap = {
  "/": { icon: "refresh" },
};

const useStyles = makeStyles((theme) => ({
  refresh: {
    width: "40px",
    height: "40px",
    color: theme.palette.fourth.main,
  },
  back: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.fourth.main,
    borderRadius: "4px",
  },
}));

export const Icon = ({ handleUpdate }) => {
  const classes = useStyles();
  const location = useLocation().pathname;

  const icon = (pathsMap[location] ? pathsMap[location] : {}).icon;

  if (icon === "refresh") {
    return (
      <IconButton edge="end" aria-label="refresh" onClick={handleUpdate}>
        <RefreshIcon className={classes.refresh} />
      </IconButton>
    );
  }
  return (
    <Link to="/">
      <IconButton edge="end" aria-label="arrow-back">
        <ArrowBackIcon fontSize="large" className={classes.back} />
      </IconButton>
    </Link>
  );
};
