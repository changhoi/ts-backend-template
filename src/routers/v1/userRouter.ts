import express, { Request, NextFunction, Response } from "express";
import { Container } from "typedi";
import { OK } from "http-status-codes";
import UserService from "@/services/userService";
import { BadRequest } from "@/errors/errRequest";

const router = express.Router();

router.get("", async (req: Request, res: Response, next: NextFunction) => {
  const userService = Container.get(UserService);
  const userList = await userService.getAllUser();
  res.status(OK).json(userList);
});

router.post("", async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  try {
    if (!username) {
      throw new BadRequest("필수 필드가 필요합니다.");
    }
    const userService = Container.get(UserService);
    const ret = await userService.signup(username);
    if (!ret.success) throw ret.error;

    res.status(OK).json(ret.result);
  } catch (e) {
    next(e);
  }
});

export default router;
