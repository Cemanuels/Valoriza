import { Request, Response } from "express";
import { DeleteUserService } from "../service/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService();

    const user = await deleteUserService.execute(id);

    return response.json(user);
  }
}

export { DeleteUserController };
