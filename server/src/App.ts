import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";
import * as dotenv from "dotenv"

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
  }
}

export default new App().express;
