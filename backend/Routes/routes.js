const router = require("express").Router();
const articleController = require("../Controller/articleController");
const customSearchController = require("../Controller/customSearchController");
const fileController = require("../Controller/fileController");
const userController = require("../Controller/userController")




router
  .route("/getArticles")
  .get(articleController.getPublicArticle)

router
  .route("/articles/:ArticleId")
  .put(articleController.updatePublicArticleRating)
  .get(articleController.getSpecificArticle);

router
  .route("/moderation")
  .get(articleController.getModeratorArticle)
  .post(articleController.moderatorAcceptArticle);

router
  .route("/moderation/:ArticleId")
  .delete(articleController.moderatorDelete);

router
  .route("/analyst")
  .get(articleController.getAnalystArticle)
  .post(articleController.analystAcceptArticle);

router
  .route("/analyst/:ArticleId")
  .delete(articleController.analystDelete)
  

router
  .route("/declined")
  .get(articleController.getDeclinedArticle)
  .post(articleController.declineArticle);

router
  .route("/methods")
  .get(customSearchController.getSeMethods)
  .post(customSearchController.addMethod);


router
  .route("/methods/:methodId")
  .put(customSearchController.addNewMethod);

router
  .route("/register")
  .post(userController.addNewUser)

router
  .route("/login")
  .post(userController.login)

router
  .route("/getUser")
  .get(userController.getAllUsers)

router
  .route("/getUser/:UserId")
  .put(userController.changeRole)
  .delete(userController.deleteUser)

router
  .route("/articles")
  .post(articleController.addNewArticle);

router
  .route("/files")
  .get(fileController.getFile)
  .post(fileController.addNewFile);
console.log("fileRoutes been activied");

module.exports = router;

