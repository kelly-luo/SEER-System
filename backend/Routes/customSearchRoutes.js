import {getSeMethods} from '../Controller/customSearchController.js';

const routes = (app) => {
    app.route('/')
        .get(getSeMethods)
}

export default routes;