const {
  get_tags,
  add_tag,
  get_tag,
  delete_tag,
  status_change,
  update_tag,
} = require("../../controller/dashboard/tagController");
const { checkAdmin, adminAuth } = require("../../middlewares/authCheck");

const router = require("express").Router();
router.post("/add", adminAuth, add_tag);
router.get("/get", adminAuth, get_tags);
router.delete("/delete/:tagId", adminAuth, delete_tag);
router.get("/edit/:tagId", adminAuth, get_tag);
router.patch("/update/:tagId", adminAuth, update_tag);
router.patch("/update/status/:tagId", adminAuth, status_change);
module.exports = router;
