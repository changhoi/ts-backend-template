import express from "express";
import v1 from "./v1";
import { OK } from "http-status-codes";

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(OK).json({ server: "on" });
});

router.use("", v1);

export default router;
