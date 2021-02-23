const obj = {
  baseUrl: " https://hacker-news.firebaseio.com/v0",
  headers: {
    "Content-type": "application/json",
  },
};

// Получение списка новостей
export const getNewsList = () => {
  return fetch(obj.baseUrl + "/newstories.json?print=pretty", {
    headers: obj.headers,
  }).then((res) => res.json());
};

// Получение информации о новости по её id
export const getNews = (id) => {
  return fetch(obj.baseUrl + `/item/${id}.json?print=pretty`, {
    headers: obj.headers,
  }).then((res) => res.json());
};

// Получение информации о комментарии по его id
export const getComment = (id) => {
  return fetch(obj.baseUrl + `/item/${id}.json?print=pretty`, {
    headers: obj.headers,
  }).then((res) => res.json());
};
