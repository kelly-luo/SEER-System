
const router = require('express').Router();
const articleController = require('../Controller/articleController')
const customSearchController = require('../Controller/customSearchController');
const fileController = require('../Controller/fileController')


router
    .route('/articles')
    .get(articleController.getPublicArticle)
    .post(articleController.addNewArticle);


router
    .route('/articles/:ArticleId')
    .put(articleController.updatePublicArticleRating);

router
    .route('/moderation')
    .get(articleController.getModeratorArticle)
    .post(articleController.moderatorAcceptArticle)

router
    .route('/moderation/:ArticleId')
    .delete(articleController.moderatorDelete);

router
    .route('/analyst')
    .get(articleController.getAnalystArticle)
    .post(articleController.analystAcceptArticle)

router
    .route('/analyst/:ArticleId')
    .delete(articleController.analystDelete);

router
    .route('/declined')
    .get(articleController.getDeclinedArticle)
    .post(articleController.declineArticle)

router
    .route('/methods')
    .get(customSearchController.getSeMethods)
    .post(customSearchController.addNewMethod)

router
    .route('/files')
    .get(fileController.getFile)
    .post(fileController.addNewFile)
    console.log("fileRoutes been activied")


module.exports = router;

