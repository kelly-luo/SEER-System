const specificRouter = require("express").Router();
const articleController = require("../Controller/articleController");
const customSearchController = require("../Controller/customSearchController");
const fileController = require("../Controller/fileController");
const userController = require("../Controller/userController")
const auth = require("../middleware/auth")





specificRouter.use(auth)
  .route('/users')
  .get(userController.getUsers);


module.exports = specificRouter;
