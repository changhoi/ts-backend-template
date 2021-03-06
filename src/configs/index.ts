import dotenv from "dotenv";

if (!process.env?.ENV) {
  dotenv.config();
}

export default {
  NODE_ENV: String(process.env.NODE_ENV),
  ENV: String(process.env.ENV),
  SECRET: String(process.env.SECRET),
  APP: {
    PORT: Number(process.env.APP_PORT),
    LOGSTAGE: String(process.env.APP_LOGSTAGE),
    HOST: String(process.env.APP_HOST)
  },
  DB: {
    HOST: String(process.env.DB_HOST),
    DATABASE: String(process.env.DB_DATABASE),
    USERNAME: String(process.env.DB_USERNAME),
    PASSWORD: String(process.env.DB_PASSWORD)
  }
};
