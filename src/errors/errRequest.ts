import { BAD_REQUEST } from "http-status-codes";

abstract class RequestError extends Error {
  statusCode: number;
  constructor(message?: string) {
    super(message);
  }
}

export class BadRequest extends RequestError {
  constructor(message: string = "유효하지 않은 요청입니다.") {
    super(message);
    this.statusCode = BAD_REQUEST;
  }
}
