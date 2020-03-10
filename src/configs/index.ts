import dotenv from "dotenv";

if (!process.env?.ENV) {
  dotenv.config();
}

export default {
  ENV: String(process.env.ENV),
  SECRET: String(process.env.SECRET),
  APP: {
    PORT: Number(process.env.APP_PORT),
    LOGSTAGE: String(process.env.APP_LOGSTAGE)
  }
};
