const jsonServer = require('json-server');
const path = require('path');


const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Use the file path directly

const cors = require('cors');

server.use(cors({
  origin: 'http://localhost:3000/', // Replace with your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));
server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});

// Export the Server API
module.exports = server;