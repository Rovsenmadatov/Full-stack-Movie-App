const optionsRequest = (req, res) => {
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS"
    );
  
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    res.end();
  };
  
  module.exports = optionsRequest;