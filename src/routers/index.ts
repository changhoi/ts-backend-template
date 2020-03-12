import { OK } from "http-status-codes";
import express from "express";
import { BadRequest } from "@/errors/errRequest";
import v1 from "./v1";

const router = express.Router();

/**
 * @swagger
 * /health:
 *  get:
 *    summary: 서버 헬스 체크
 *    responses:
 *      200:
 *        description: 서버 헬스 체크용도, Swagger 체크 용도
 */

router.get("/health", (req, res) => {
  res.status(OK).json({ server: "on" });
});

router.get("/error", (req, res, next) => {
  next(new BadRequest("에러 테스트"));
});

router.use("", v1);

export default router;
