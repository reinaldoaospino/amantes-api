import { Router } from 'express';
import { userController } from '../controllers/user.controller';

class UserRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get('/login', userController.login);
    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;