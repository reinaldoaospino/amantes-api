import express from 'express';
import userRoutes from './routes/user.routes';

class Server {
    private app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'))
        })
    }

    private config() {
        this.app.set('port', process.env.PORT || 3000)
    }

    private routes() {
        this.app.use('/user', userRoutes)
    }


}

const server = new Server();
server.start();