import express, { Application } from 'express';
import logger from 'morgan';

// Routes
import IndexRoutes from '@routes/index';

export class App {
    private app: Application;

    public constructor(private port?: number) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(logger('dev'));
    }

    private routes() {
        this.app.use(IndexRoutes);
    }

    public async listen(): Promise<void> {
        const PORT = this.app.get('port');
        await this.app.listen(PORT);
        console.log(`Server is running on port ${PORT}`);
    }
}