import {addNewFile,getFile, addNewArticle, getModeratorArticle, moderatorAcceptArticle, moderatorDelete, analystDelete, getAnalystArticle, analystAcceptArticle, getPublicArticle, declineArticle, updatePublicArticleRating, getDeclinedArticle, addNewMethod, getSeMethods } from '../Controller/controller.js';

export const routes = (app) => {
    app.route('/articles')
        .get(getPublicArticle)

        .post(addNewArticle);

    app.route('/articles/:ArticleId')
        .put(updatePublicArticleRating)

    app.route('/moderation')
        .get(getModeratorArticle)

        .post(moderatorAcceptArticle)

    app.route('/moderation/:ArticleId')
        .delete(moderatorDelete)

    app.route('/analyst')
        .get(getAnalystArticle)

        .post(analystAcceptArticle)

    app.route('/analyst/:ArticleId')

        .delete(analystDelete)


    app.route('/declinedArticles')
        .get(getDeclinedArticle)
        
        .post(declineArticle)

}

export const SeRoutes = (app) => {
    app.route('/methods')
        .get(getSeMethods)

        .post(addNewMethod)
}
export const fileRoutes = (app) => {
    app.route('/files')
    // GET endpoint
        .get(getFile)

    // POST endpoint
        .post(addNewFile);
        console.log("fileRoutes been activied")
    
}
