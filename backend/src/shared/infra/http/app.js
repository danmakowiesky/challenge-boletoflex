import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './api/routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(
        path.resolve(__dirname, '..', '..', '..', '..', 'temp', 'uploads'),
      ),
    );
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
