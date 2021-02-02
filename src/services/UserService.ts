import { inject, injectable } from "inversify";
import IUserRepository from "../core/interfaces/repository/IUserRepository";
import { IUserService } from "../core/interfaces/services/IUserService";
import { TYPES } from "../core/inversify/types";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@injectable()
export class UserService implements IUserService {
  _repository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) repository: IUserRepository) {
    this._repository = repository;
  }

 async login(username: string, password: string): Promise<OperationResponse> {

    const user = await this._repository.login(username, password);
    console.log(user)
    if (!user) {
      throw new Error("User or password incorrect");
    }

    return new OperationResponse({ correct: true });
  }
}
