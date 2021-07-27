import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserRequest {
  async execute({email, password} : IAuthenticateUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    
    //Verificar se usuário existe
    const user = await usersRepository.findOne({
      email
    })

    if(!user) {
      throw new Error("Email/password incorrect");
    }
    
  }
}