import express, { Application } from 'express';

export class App {
    private app: Application;

    public constructor(private port: number) {
        this.app = express();
    }

    public async listen(): Promise<void> {
        await this.app.listen(this.port);
        console.log(`Server is running on port ${this.port}`);
    }
}