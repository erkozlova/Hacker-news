import React, {useCallback} from "react";
import { Typography } from "@material-ui/core";
import { dateFormat } from '../../../utils/dateFormat';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {

  },
  comment: {
    borderBottom: 'solid 2px black',
    marginBottom: '10px',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    marginBottom: '10px',
  },
  author: {
    marginRight: '10px'
  },
  time: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderRadius: '5px',
    marginBottom: '10px',
  }
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
          <Typography variant='h6' component='span' className={classes.author}>{`Author: ${comment.by}`}</Typography>
          <Typography variant='h6' component='span' className={classes.time}>{dateFormat(comment.time)}</Typography>
        </div>
        <Typography variant='body1' component='p' dangerouslySetInnerHTML={{ __html: comment.text }} />
        { comment.kids ? <Typography variant='button' component='button' className={classes.button} onClick={getKidsComments}>See more comments</Typography> : <></> }
      </div>
      <ul className={classes.list}>
          {
            Object.keys(comment.comments).map((id) => {
              const item = comment.comments[id];
              return (<Comment key={item.id} comment={item} handleGetComments={handleGetComments}/>);
            })
          }
      </ul>
    </>
  );
};
