import { Express } from "express";
import appLoader from "./appLoader";

const loaders = async (app: Express) => {
  await appLoader(app);
  // await dbLoader();
};

export default loaders;
