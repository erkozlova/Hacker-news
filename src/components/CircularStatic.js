import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    width: '25vh',
    height: '25vh',
  },
  percent: {
    fontSize: '55px',
    color: theme.palette.third.main
  },
  circle: {
    color: theme.palette.fourth.main,
  }
}));

export const CircularProgressWithLabel = (props) => {
  const classes = useStyles();

  return (
      <Box position="relative" display="inline-flex" className={classes.box}>
        <CircularProgress variant="determinate" value={props.loadingProcess} className={classes.circle} size='100%'/> 
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            component="span"
            color="textSecondary"
            className={classes.percent}
          >{`${props.loadingProcess}%`}</Typography>
        </Box>
      </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  loadingProcess: PropTypes.number.isRequired,
};

