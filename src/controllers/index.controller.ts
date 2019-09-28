import { Request, Response } from 'express';

export function getMain(request: Request, response: Response) {
    return response.redirect('/api');
} 

export function getApi(request: Request, response: Response) {
    return response.json('web api');
} 