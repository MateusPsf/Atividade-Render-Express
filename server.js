const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ logger: true });
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
