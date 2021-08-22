import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class GetUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!usersRepository) {
      throw new Error("Empty users database!");
    }

    const users = await usersRepository.find();

    return classToPlain(users);
  }
}

export { GetUsersService };
