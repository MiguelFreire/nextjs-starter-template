import next from 'next';
import minimist from 'minimist';
import compression from 'compression';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const DEFAULT_PORT = 3000;
const express = require('express');
const args = minimist(process.argv.slice(2));
const port = args.port ? args.port : DEFAULT_PORT;

// @ts-ignore
const handler = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(compression());
  // @ts-ignore
  server.get('/status', function(req, res) {
    res.send('OK');
  });
  // @ts-ignore
  server.get('/robots.txt', function(req, res) {
    res.sendFile(path.join(__dirname, '/static', 'robots.txt'));
  });
  server.use(handler);
  // @ts-ignore
  server.listen(port, err => {
    if (err) throw err
    console.log(`Ready on port: ${port}`)
  });
})
