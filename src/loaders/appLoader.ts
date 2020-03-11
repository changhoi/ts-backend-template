import express, { Express, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import configs from "@/configs";
import routers from "@/routers";

const appLoader = async (app: Express) => {
  app.use(helmet());
  app.set("port", configs.APP.PORT || 3000);
  app.use(logger(configs.APP.LOGSTAGE));
  app.use(cookieParser(configs.SECRET));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  console.log(configs.NODE_ENV);

  if (configs.NODE_ENV === "development") {
    const { default: swaggerUi } = await import("swagger-ui-express");
    const { default: swaggerSpec } = await import("@/swagger");

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  app.use("/api", routers);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
      message: err.message,
      statusCode: err.statusCode,
      error: configs.ENV === "prod" ? null : err
    });
  });
};

export default appLoader;
