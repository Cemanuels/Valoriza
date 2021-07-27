import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    //Verificar se usuário existe
    const user = await usersRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "67be988f498cd18fb2945aab0b51e031",
      {
        subject: user.id,
        expiresIn: "",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };