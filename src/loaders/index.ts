import { Express } from "express";
import appLoader from "./appLoader";
import dbLoader from "./dbLoader";

const loaders = async (app: Express) => {
  await appLoader(app);
  await dbLoader();
};

export default loaders;
