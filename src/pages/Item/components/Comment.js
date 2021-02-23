import React, { useCallback } from "react";
import { Typography, Button } from "@material-ui/core";
import { dateFormat } from "../../../utils/dateFormat";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {},
  comment: {
    marginBottom: "20px",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    marginBottom: "10px",
  },
  author: {
    marginRight: "10px",
  },
  time: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginTop: "10px",
  },
}));

export const Comment = ({ comment, handleGetComments }) => {
  const classes = useStyles();

  const getKidsComments = useCallback(() => {
    handleGetComments(comment.kids, comment.path);
  }, [handleGetComments, comment]);

  return (
    <>
      <div className={classes.comment}>
        <div className={classes.wrapper}>
          <Typography
            variant="h6"
            component="span"
            className={classes.author}
          >{`Author: ${comment.by}`}</Typography>
          <Typography variant="h6" component="span" className={classes.time}>
            {dateFormat(comment.time)}
          </Typography>
        </div>
        <Typography
          variant="body1"
          component="p"
          dangerouslySetInnerHTML={{ __html: comment.text }}
        />
        {comment.kids ? (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={getKidsComments}
          >
            See more comments
          </Button>
        ) : (
          <></>
        )}
      </div>
      <ul className={classes.list}>
        {Object.keys(comment.comments).map((id) => {
          const item = comment.comments[id];
          return (
            <Comment
              key={item.id}
              comment={item}
              handleGetComments={handleGetComments}
            />
          );
        })}
      </ul>
    </>
  );
};
