import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class DeleteUserService {
  async execute(user_id: string) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({
      id: user_id,
    });

    if (!user) {
      throw new Error("User not found.");
    }

    await usersRepository.delete(user_id);

    return user;
  }
}

export { DeleteUserService };
