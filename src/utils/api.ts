import { Item } from "../types";

const obj = {
  baseUrl: " https://hacker-news.firebaseio.com/v0",
  headers: {
    "Content-type": "application/json",
  },
};

type GetNewsResponse = Item;

type GetCommentsResponse = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  type: string;
  time: number;
};

// Получение списка новостей
export const getNewsList = (): Promise<number[]> => {
  return fetch(obj.baseUrl + "/newstories.json?print=pretty", {
    headers: obj.headers,
  }).then((res) => res.json());
};

// Получение информации о новости по её id
export const getNews = (id: number): Promise<GetNewsResponse> => {
  return fetch(obj.baseUrl + `/item/${id}.json?print=pretty`, {
    headers: obj.headers,
  }).then((res) => res.json());
};

// Получение информации о комментарии по его id
export const getComment = (id: number): Promise<GetCommentsResponse> => {
  return fetch(obj.baseUrl + `/item/${id}.json?print=pretty`, {
    headers: obj.headers,
  }).then((res) => res.json());
};
