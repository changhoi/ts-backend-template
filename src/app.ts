import express, { Express } from "express";
import loaders from "@/loaders";

class App {
  private app: Express;
  constructor() {
    this.app = express();
  }

  async bootstrap() {
    await loaders(this.app);
    this.app.listen(this.app.get("port"), () => {
      console.log("Hello World!");
    });
  }
}

export default App;
