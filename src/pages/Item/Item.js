import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dateFormat } from "../../utils/dateFormat";
import { getItem, getComments, getItemKids } from "../../actions";
import { Comment } from "./components/Comment";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: " 50px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.third.main,
    borderRadius: "6px",
  },
  wrapper_title: {
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
  },
  rating: {
    width: "42px",
    height: "42px",
    marginLeft: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.fourth.main,
    borderRadius: "50%",
  },
  score: {
    fontSize: "20px",
  },
  title: {
    width: "90%",
    marginLeft: "30px",
  },
  subtitle_container: {
    marginTop: "30px",
    marginBottom: "30px",
    display:'flex',
    justifyContent: 'space-between',
  },
  wrapper_subtitle: {
    display: "flex",
  },
  url: {
    marginLeft: '102px',
    color: "#000",
  },
  author: {
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
  },
  time: {
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
  },
  section: {
  },
  comments: {
    marginLeft: "60px",
  },
  list: {
    padding: "0 60px",
    listStyleType: "none",
  },
  noComments: {
    marginLeft: '102px',
    marginBottom: '30px',
  }
}));

export const Item = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const item = useSelector((state) => state.item.data);
  const comments = useSelector((state) => state.comments.data);
  
  const handleGetNews = useCallback(
    (id) => {
      dispatch(getItem(id));
    },
    [dispatch]
  );

  const handleGetItemKids = useCallback(
    (id, kids) => {
      dispatch(getItemKids(id, kids));
    },
    [dispatch]
  );

  const handleGetComments = useCallback(
    (array, path) => {
      dispatch(getComments(array, path));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetNews(Number(id));
  }, [handleGetNews, id]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleGetItemKids(Number(id), item.kids);
      // console.log(item.kids)
      // handleGetComments(item.kids);
    }, 60000);

    handleGetComments(item.kids);
    return () => {
      clearInterval(timer);
    };


    // if (!isEmpty(item) && item.kids) {
    //   handleGetComments(item.kids);
    // }
  }, [handleGetComments, item, id, handleGetItemKids]);  

  if (isEmpty(item)) {
    return null;
  }

  console.log(comments);

  return (
    <Container>
      <main className={classes.main}>
        <div className={classes.wrapper_title}>
          <Box className={classes.rating}>
            <Typography component="span" className={classes.score}>
              {item.score}
            </Typography>
          </Box>
          <Typography variant="h2" component="h2" className={classes.title}>
            {item.title}
          </Typography>
        </div>
        <div className={classes.subtitle_container}>
          <a href={item.url} className={classes.url}>
            <Typography variant="h5" component="span">
              Learn more
            </Typography>
          </a>
          <div className={classes.wrapper_subtitle}>
            <Typography
              variant="h5"
              component="span"
              className={classes.author}
            >{`Author: ${item.by}`}</Typography>
            <Typography variant='h5' component="span" className={classes.time}>
              {dateFormat(item.time)}
            </Typography>
          </div>
        </div>
        {!isEmpty(comments) && item.kids? <section className={classes.section}>
          <Typography variant="h4" component="h3" className={classes.comments}>
            Comments({item.kids.length}):
          </Typography>
          <ul className={classes.list}>
            <li>
              {item.kids.map((id) => {
                if (comments[id] && comments[id].deleted) {
                  return (
                    <h2 key={comments[id].id}>This comment was deleted</h2>
                  );
                }
                return (
                  <Comment
                    comment={comments[id]}
                    key={comments[id].id}
                    handleGetComments={handleGetComments}
                  />
                );
              })}
            </li>
          </ul>
        </section> : <Typography variant='h4' component="p" className={classes.noComments}>There are not comments yet</Typography> }
      </main>
    </Container>
  );
};
