import {addNewArticle, getArticle, getSeMethods, addNewMethod, updateArticle} from '../Controller/controller.js';

export const routes = (app) => {
    app.route('/articles')
    // GET endpoint
        .get(getArticle)

    // POST endpoint
        .post(addNewArticle);
    
    app.route('/articles/:ArticleId')
        .put(updateArticle)
    
}

export const SeRoutes = (app) => {
    app.route('/methods')
        .get(getSeMethods)

        .post(addNewMethod)
}