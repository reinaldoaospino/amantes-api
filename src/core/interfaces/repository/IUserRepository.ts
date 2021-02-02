import { UserModel } from "../../models/User";

export default interface IUserRepository {
  login(username: string, password: string): Promise<boolean>;
}
