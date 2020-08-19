import {addNewComment, getComments} from '../Controller/controller.js';

const routes = (app) => {
    app.route('/comments')
    // GET endpoint
    .get(getComments)

    // POST endpoint
    .post(addNewComment);
    
}

export default routes;