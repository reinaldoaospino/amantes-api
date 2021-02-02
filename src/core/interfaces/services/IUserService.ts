import { OperationResponse } from "../../models/reponse/OperationResponse";

export interface IUserService {
  login(username: string, password: string): Promise<OperationResponse>;
}
