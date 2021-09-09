import React, { FC, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import { getItemComments } from '../../../actions';
import { useAppSelector } from "../../../store";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  refresh: {
    width: "40px",
    height: "40px",
    color: theme.palette.secondary.dark,
  },
  back: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: "4px",
  },
}));

type Props = {
  handleUpdate: () => void;
}

export const Icon: FC<Props> = ({ handleUpdate }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const id = useAppSelector((state) => state.item.data?.id)

  // Получение информации о новости и её комментариях
  const handleGetItemComments = useCallback((id) => {
    dispatch(getItemComments(id))
  }, [dispatch]);

  // Выбор типа обновление страницы, в зависимости от пути
  const onClickFunction = () => {
    if(location === '/') {
      // Обновляем список новостей
      handleUpdate();
    }
    else {
      // Обновляем страницу новости
      handleGetItemComments(id);
    }
  }

  return (
    <IconButton edge="end" aria-label="refresh" onClick={onClickFunction}>
      <RefreshIcon className={classes.refresh} />
    </IconButton>
  );
};
