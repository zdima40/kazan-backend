import express, { Application } from 'express';
import logger from 'morgan';
import methodOverride from 'method-override';

// Routes
import IndexRoutes from './routes/index';
import ArticleRoutes from './routes/article';

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
        this.app.use(express.urlencoded({ extended: false }));
        // Add headers
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
        this.app.use(methodOverride(function (req, res) {
            if (req.body && typeof req.body === 'object' && '_method' in req.body) {
              // look in urlencoded POST bodies and delete it
              var method = req.body._method
              delete req.body._method
              return method
            }
          }))
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use(ArticleRoutes);
    }

    public async listen(): Promise<void> {
        const PORT = this.app.get('port');
        await this.app.listen(PORT);
        console.log(`Server is running on port ${PORT}`);
    }
}