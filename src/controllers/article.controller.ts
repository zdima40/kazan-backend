import { ARTICLES } from '../mocks/articles';
import { Request, Response } from 'express';
import { Article } from '../classtypes/article'; 
    
let articles = ARTICLES;

export function getArticles(request: Request, response: Response) {
    const search = request.query.search;
    if (search) {
        articles = searchArticle(search);
    }
    response.send(articles);
}

export function createArticle(request: Request, response: Response): void {
    const newArticle = request.body;
    articles.push(Object.assign({}, newArticle));
    const id = articles.slice(-1)[0].id;
    response.send({id: id});
}

export function getArticleById(request: Request, response: Response): void {
    const id = +request.params.id;
    const article = articles.find(article => article.id === id);
    response.send(article);
}

export function deleteArticle(request: Request, response: Response): void {
    const id = +request.body.id;
    articles.forEach((article, index) => {
        if (article.id === id) {
            articles.splice(index, 1);
            response.send({id: id});
        }
    })
    response.send(204);
}

function searchArticle(text: string): Article[] {
    return articles.filter(article => {
            const isTitle = article.title.includes(text);
            const isContent = article.content.includes(text);
            return isTitle || isContent;
        }
    );
}



