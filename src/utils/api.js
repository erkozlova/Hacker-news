const obj = {
  baseUrl: " https://hacker-news.firebaseio.com/v0",
  headers: {
    "Content-type": "application/json",
  },
};

export const getNewsList = () => {
  return fetch(obj.baseUrl + "/newstories.json?print=pretty", {
    headers: obj.headers,
  }).then((res) => res.json());
};

export const getNews = (id) => {
  return fetch(obj.baseUrl + `/item/${id}.json?print=pretty`, {
    headers: obj.headers,
  }).then((res) => res.json());
};

export const getComment = (id) => {
  return fetch(obj.baseUrl + `/item/${id}.json?print=pretty`, {
    headers: obj.headers,
  }).then((res) => res.json());
};
