import express from "express";
import userRouter from "./userRouter";

const router = express.Router();

router.use("/users", userRouter);

export default router;
