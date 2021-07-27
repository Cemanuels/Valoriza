import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class GetUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!usersRepository) {
      throw new Error("Empty users database!");
    }

    const users = await usersRepository.find();

    return users.map(({password, ...user}) => user);
  }
}

export { GetUsersService };
