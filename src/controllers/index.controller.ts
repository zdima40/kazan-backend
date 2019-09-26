import { Request, Response } from 'express';

export function indexMain(request: Request, response: Response) {
    return response.json("Hello World!");
} 
