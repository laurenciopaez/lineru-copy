const apiController = {
  getData: (req, res) => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI(process.env.API_KEY);
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0];
    
    newsapi.v2
      .everything({
        q: "bank",
        from: yesterday,
        to: today,
        language: "en",
        sortBy: "relevancy",
      })
      .then((response) => {
        console.log(response);
        
        res.json({message: 'Data ok', data: response})
      })
      .catch( (error) => {
        console.error(error);
        res.status(500).json({ message: 'Error obtaining data'})
      })
  },
};

module.exports = apiController;