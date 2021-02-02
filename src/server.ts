import express, { Request, Response, NextFunction } from "express";
import { myContainer } from "./core/inversify/inversify.config";
import { ResponseBase } from "./core/models/reponse/ResponseBase";
import { StatusResponse } from "./core/models/reponse/ErrorResponse";
import { InversifyExpressServer } from "inversify-express-utils";
import { Mongoose } from "mongoose";
import mongoose from "mongoose";

class Server {
  private app: express.Application;
  private server: InversifyExpressServer;
  private mongoose: Mongoose;

  constructor() {
    this.app = express();
    this.mongoose = mongoose;
    this.config();
  }

  public start() {
    this.app = this.server.build();
    this.mongoose
      .connect(
        "mongodb+srv://reinaldo:Chawla-11@cluster0.ndton.mongodb.net/amantesDB?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
      .then(db => console.log("Db es is connected")) 
      .catch(err => console.log("Error conecting to Db", err));

    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }

  private config() {
    this.server = new InversifyExpressServer(myContainer);

    this.server.setConfig(app => {
      app.set("port", process.env.PORT || 3000);
      app.use(express.json());
    });

    this.server.setErrorConfig(app => {
      app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        const error = new StatusResponse({
          code: 500,
          message: err.message
        });

        res.status(500).json(new ResponseBase({ data: null, status: error }));
      });
    });
  }
}

const server = new Server();
server.start();
