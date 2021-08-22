import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {

    const { sub } = verify(token, "67be988f498cd18fb2945aab0b51e031") as IPayload;
    request.user_id = sub;

  } catch (err) {
    return response.status(401).end();
  }

  return next();
}
