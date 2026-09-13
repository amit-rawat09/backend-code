const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.end("/ route");
  } else if (url === "/about") {
    res.end("about route");
  } else if (url === "/contact") {
    res.end("contact route");
  } else {
    res.end("404 page not found");
  }
});
console.log(server);
server.listen(3000, () => {
  console.log("app is running on port 3000");
});
