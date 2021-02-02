import { Request } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import { ILoginController } from "../core/interfaces/controllers/IUserController";
import { IUserService } from "../core/interfaces/services/IUserService";
import { TYPES } from "../core/inversify/types";
import { OperationResponse } from "../core/models/reponse/OperationResponse";

@controller("/api/login")
export class LoginController implements ILoginController {
  private readonly _service: IUserService;

  constructor(@inject(TYPES.IUserService) service: IUserService) {
    this._service = service;
  }

  @httpPost("/")
  async login(req: Request): Promise<OperationResponse> {
    const { username, password } = req.body;

    if (!username || !password)
      throw new Error("You must specify the username and password");

    return await this._service.login(username, password);
  }
}
