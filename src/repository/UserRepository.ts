import { injectable } from "inversify";
import IUserRepository from "../core/interfaces/repository/IUserRepository";
import UserShema from "./schema/UserShema";

@injectable()
export class UserRepository implements IUserRepository {
  async login(user: string, password: string): Promise<boolean> {
    const response = await UserShema.findOne({ user, password });

    return response == null ? false : true;
  }
}
