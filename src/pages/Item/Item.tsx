import React, { useEffect, useCallback, FC } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container, Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dateFormat } from "../../utils/dateFormat";
import { getComments, getItemComments } from "../../actions";
import { Comment } from "./components/Comment";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  sectionLoader: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  circle: {
    color: theme.palette.secondary.dark,
    width: '25vh',
    height: '25vh',
  },
  main: {
    margin: "50px 0",
    boxSizing: "border-box",
    padding: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
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
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  },
  score: {
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  title: {
    width: "90%",
    marginLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  learnMoreLink: {
    color: theme.palette.secondary.dark,
    marginLeft: "102px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
      fontSize: "15px",
    },
  },
  subtitle_container: {
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "space-between",
  },
  wrapper_subtitle: {
    display: "flex",
  },
  author: {
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  time: {
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  comments: {
    marginLeft: "60px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  list: {
    padding: "0 60px",
    listStyleType: "none",
  },
  noComments: {
    marginLeft: "102px",
    marginBottom: "30px",
  },
}));

// Компонента новости на отдельной странице
export const Item: FC = () => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const dispatch = useDispatch();

  // Получение данных из стейта
  const item = useAppSelector((state) => state.item.data);
  const comments = useAppSelector((state) => state.comments.data);
  const isLoading = useAppSelector((state) => state.item.isLoading);

  // Получение информации о новости и комментариев
  const handleGetItemComments = useCallback(
    (id) => {
      dispatch(getItemComments(id));
    },
    [dispatch]
  );

  // Получение вложенных комментариев при клике на комментарий
  const handleGetComments = useCallback(
    (array, path) => {
      dispatch(getComments(array, path));
    },
    [dispatch]
  );

  // Получение информации при первой отрисовке новости
  useEffect(() => {
    handleGetItemComments(Number(id));
  }, [handleGetItemComments, id]);

  // Интервал получения информации
  useEffect(() => {
    const timer = setInterval(() => {
      handleGetItemComments(Number(id));
    }, 60000);

    // Удаление интервала при демонтировании новости
    return () => {
      clearInterval(timer);
    };
  }, [id, handleGetItemComments]);

  // При загрузке отрисовывается загрузчик
  if (isLoading) {
    return (
      <section className={classes.sectionLoader}>
        <CircularProgress size="25vh" className={classes.circle}/>
      </section>
    );
  }

  // При отсутствии информации о новости
  if (!item) {
    return null;
  }

  // Возвращаем верстку новости. И комментариев, если они есть, в противном случае Сообщение об отсутсвии комментариев
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
          <Typography
            variant="h5"
            component="span"
            className={classes.learnMoreLink}
          >
            <a href={item.url}>Learn more</a>
          </Typography>
          <div className={classes.wrapper_subtitle}>
            <Typography
              variant="h5"
              component="span"
              className={classes.author}
            >{`Author: ${item.by}`}</Typography>
            <Typography variant="h5" component="span" className={classes.time}>
              {dateFormat(item.time)}
            </Typography>
          </div>
        </div>
        {comments && item.kids ? (
          <>
            <Typography
              variant="h4"
              component="h3"
              className={classes.comments}
            >
              Comments({item.kids.length}):
            </Typography>
            <ul className={classes.list}>
              {item.kids.map((id) => (
                <Comment
                  comment={comments[id]}
                  key={comments[id].id}
                  handleGetComments={handleGetComments}
                />
              ))}
            </ul>
          </>
        ) : (
          <Typography variant="h4" component="p" className={classes.noComments}>
            There are no comments yet
          </Typography>
        )}
      </main>
    </Container>
  );
};
