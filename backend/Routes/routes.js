import {addNewArticle, getArticle} from '../Controller/controller.js';

const routes = (app) => {
    app.route('/articles')
    // GET endpoint
        .get(getArticle)

    // POST endpoint
        .post(addNewArticle);
    
    app.route('/')
        .get(getSeMethods)
}

export default routes;