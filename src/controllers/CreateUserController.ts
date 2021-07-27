import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";
import { hash } from "bcryptjs";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const createUserService = new CreateUserService();

    const passwordHash = await hash(password, 8);

    const user = await createUserService.execute({
      name,
      email,
      password: passwordHash,
      admin,
    });

    return response.json(user);
  }
}

export { CreateUserController };
