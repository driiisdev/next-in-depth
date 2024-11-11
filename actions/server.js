const jsonServer =  require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../db.json")
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  console.log("Request Received");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(router);
