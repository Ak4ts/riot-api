import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";
import * as dotenv from "dotenv"

class App {
  public express: express.Application;

  public constructor() {
    dotenv.config();
    this.express = express();
    this.database();
  private database(): void {
    mongoose.connect(process.env.DATABASE).then(() => {
      console.log("Database Connected 🚀🚀🚀");
    }).catch((error) => {
      console.log("Error: " + error)
    });
  }
  }
}

export default new App().express;
