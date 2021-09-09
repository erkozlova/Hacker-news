import React, { FC } from "react";
import { Typography, CircularProgress, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "25vh",
    height: "25vh",
  },
  percent: {
    fontSize: "55px",
    color: theme.palette.third.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: "44px",
    },
  },
  circle: {
    color: theme.palette.fourth.main,
  },
}));

type Props = {
  loadingProcess: number;
}

export const CircularProgressWithLabel: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Box position="relative" display="inline-flex" className={classes.box}>
      <CircularProgress
        variant="determinate"
        value={props.loadingProcess}
        className={classes.circle}
        size="100%"
      />
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
};