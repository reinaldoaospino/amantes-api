import { Request } from "express";
import { OperationResponse } from "../../models/reponse/OperationResponse";

export interface ILoginController {
  login(req: Request): Promise<OperationResponse>;
}
