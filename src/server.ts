import * as express from "express";
import routes from "./routes/index";
import { config } from "dotenv";
import { resolve } from "path";

import "./database/index";
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    config({
      path: resolve(__dirname, "../", ".env")
    });
    this.middlewares();
    this.routes();
  }

  routes(): void {
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(express.json());
  }

  listen(PORT: number) {
    this.app.listen(PORT, () =>
      console.log(`Server it's running at port: ${PORT}`)
    );
  }
}
export default new App();