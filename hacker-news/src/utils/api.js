class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getNewsList() {
    return fetch(this.baseUrl+'/newstories.json?print=pretty', {
      headers: this.headers,
    }).then((res) => res.json());
  }

  getNews(id) {
    return fetch(this.baseUrl+`/item/${id}.json?print=pretty`, {
      headers: this.headers,
    }).then((res) => res.json());
  }


}

const api = new Api({
  baseUrl: " https://hacker-news.firebaseio.com/v0",
  headers: {
    "Content-type": "application/json",
  }
});

export default api;