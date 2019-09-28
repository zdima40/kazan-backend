import { Router } from 'express';
import { getArticles, createArticle, deleteArticle, getArticleById  } from '../controllers/article.controller';

//const articleController = new ArticleController();

const router = Router();

router.route('/api/article')
    .get(getArticles)
    .post(createArticle)
    .delete(deleteArticle)

router.route('/api/article/:id')
    .get(getArticleById)

// router.get('/api/article', getArticles)
// router.post('/api/article', createArticle)

export default router;