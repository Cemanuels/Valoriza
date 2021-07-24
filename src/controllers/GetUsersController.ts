import { Request, Response } from "express";
import { GetUsersService } from "../service/GetUsersService";

class GetUsersController {
  async handle(request: Request, response: Response) {
    const getUserService = new GetUsersService();

    const users = await getUserService.execute();

    return response.json(users);
  }
}

export { GetUsersController };
