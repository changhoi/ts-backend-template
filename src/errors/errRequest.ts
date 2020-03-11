import { BAD_REQUEST, NOT_FOUND } from "http-status-codes";

export const MESSAGE = {
  BAD_REQUEST: "유효하지 않은 요청입니다." as const,
  NOT_FOUND: "리소스가 존재하지 않습니다." as const
};

abstract class RequestError extends Error {
  statusCode: number;

  constructor(message?: string) {
    super(message);
  }
}

export class BadRequest extends RequestError {
  constructor(message: string = MESSAGE.BAD_REQUEST) {
    super(message);
    this.statusCode = BAD_REQUEST;
  }
}

export class NotFound extends RequestError {
  constructor(message: string = MESSAGE.NOT_FOUND) {
    super(message);
    this.statusCode = NOT_FOUND;
  }
}
