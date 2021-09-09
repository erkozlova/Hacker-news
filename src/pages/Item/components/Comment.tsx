import React, { FC, useCallback } from "react";
import { isEmpty } from "lodash";
import { Typography, Button } from "@material-ui/core";
import { dateFormat } from "../../../utils/dateFormat";
import { makeStyles } from "@material-ui/core/styles";
import { Comment as CommentType } from "../../../types";

const useStyles = makeStyles((theme) => ({
  commentContainer: {
    marginLeft: "20px",
  },
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

type Props = {
  comment: CommentType;
  handleGetComments: (arg1: number[], arg2: number[]) => void;
}

// Компонента комментария к новости
export const Comment: FC<Props> = ({ comment, handleGetComments }) => {
  const classes = useStyles();

  // Получение дочерних комментариев по клику
  const getKidsComments = useCallback(() => {
    handleGetComments(comment.kids, comment.path);
  }, [handleGetComments, comment]);

  // Если комментарии удален, отрисовываем сообщение 
  if (comment.deleted) {
    return (
      <li className={classes.commentContainer}>
        <Typography variant="h6" component="h4" color="textSecondary">
          This comment was deleted
        </Typography>
      </li>
    );
  }

  // Отрисовываем список вложенных комментариев через рекурсию
  return (
    <li className={classes.commentContainer}>
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
        {comment.kids && isEmpty(comment.comments) && (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={getKidsComments}
          >
            See more comments
          </Button>
        )}
      </div>
      <ul>
        {Object.values(comment.comments).map((item) => (
          <Comment
            key={item.id}
            comment={item}
            handleGetComments={handleGetComments}
          />
        ))}
      </ul>
    </li>
  );
};
