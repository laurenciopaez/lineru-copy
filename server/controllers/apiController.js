const apiController = {
  getData: (req, res) => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("9c1fa828bb9249b9a528b74bea143aa6");
    newsapi.v2
      .everything({
        q: "bitcoin",
        sources: "bbc-news,the-verge",
        domains: "bbc.co.uk, techcrunch.com",
        from: "2017-12-01",
        to: "2017-12-12",
        language: "en",
        sortBy: "relevancy",
        page: 2,
      })
      .then((response) => {
        console.log(response);
        
        res.json({message: 'Data ok'})
      });
  },
};

module.exports = apiController;