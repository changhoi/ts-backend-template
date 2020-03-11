import fs from "fs";
import dns from "dns";
import net from "net";
import url from "url";
import childProcess from "child_process";

import { OK } from "http-status-codes";
import express from "express";
import { BadRequest } from "@/errors/errRequest";

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

router.get("/path", async (req, res) => {
  const fsRet = await new Promise(resolve => {
    fs.exists("./index.js", resolve);
  });
  const dnsConst = dns.BADFLAGS;
  const netRet = net.isIPv4("192.128.10.125");
  const urlRet = url.domainToUnicode("https://changhoi.github.io");
  childProcess.exec("echo Hello World!");

  res.json({ fsRet, dnsConst, urlRet, netRet, __dirname, __filename });
});

router.get("/error", (req, res, next) => {
  next(new BadRequest("에러 테스트"));
});

// router.use("", v1);

export default router;
