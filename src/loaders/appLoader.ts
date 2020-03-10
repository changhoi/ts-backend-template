import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import configs from "@/configs";
import routers from "@/routers";

const appLoader = (app: Express) => {
  app.use(helmet());
  app.set("port", configs.APP.PORT);
  app.use(logger(configs.APP.LOGSTAGE));
  app.use(cookieParser(configs.SECRET));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api", routers);

  app.use((err: any, req: Request, res: Response) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
      message: err.message,
      statusCode: err.statusCode,
      error: configs.ENV === "prod" ? null : err
    });
  });
};

export default appLoader;
