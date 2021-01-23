import { Request, Response } from "express";
import { IUserController } from "../core/interfaces/controllers/IUserController";


class UserController implements IUserController {

    login(req: Request, res: Response): void {
        res.send('ITS DONE BABY')
    }
}

export const userController = new UserController();