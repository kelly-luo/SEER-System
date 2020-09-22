import {addNewArticle, getArticle, getSeMethods, addNewMethod} from '../Controller/controller.js';

export const routes = (app) => {
    app.route('/articles')
    // GET endpoint
        .get(getArticle)

    // POST endpoint
        .post(addNewArticle);
    
}

export const SeRoutes = (app) => {
    app.route('/methods')
        .get(getSeMethods)

        .post(addNewMethod)
}