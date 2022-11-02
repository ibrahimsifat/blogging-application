const {
  add_category,
  delete_category,
  edit_category,
  get_category,
  update_category,
  get_categories,
} = require("../../controller/dashboard/categoryController");
const { checkAdmin, adminAuth } = require("../../middlewares/authCheck");

const router = require("express").Router();
router.post("/add", add_category);
router.get("/get", adminAuth, get_categories);
router.delete("/delete/:categoryId", adminAuth, delete_category);
router.get("/edit/:categorySlug", adminAuth, get_category);
router.patch("/update/:categoryId", adminAuth, update_category);
module.exports = router;
