const {
  get_tag_category,
  add_article,
  get_article,
  edit_article,
  update_article,
  delete_article,
} = require("../../controller/dashboard/articleController");

const { checkAdmin, adminAuth } = require("../../middlewares/authCheck");

const router = require("express").Router();
//article route............

router.get("/get-tag-category", adminAuth, get_tag_category);
router.post("/add", adminAuth, add_article);
router.get("/get", adminAuth, get_article);
router.get("/edit/:articleSlug", adminAuth, edit_article);
router.patch("/update", adminAuth, update_article);
router.delete("/delete/:articleId", adminAuth, delete_article);
module.exports = router;
