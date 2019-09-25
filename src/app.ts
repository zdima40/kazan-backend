import express, { Application } from 'express';

export class App {
    private app: Application;

    public constructor(private port?: number) {
        this.app = express();
        this.settings();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    public async listen(): Promise<void> {
        const PORT = this.app.get('port');
        await this.app.listen(PORT);
        console.log(`Server is running on port ${PORT}`);
    }
}