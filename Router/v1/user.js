const express = require("express");
const router = express.Router();
const allUser = require("../../controller/users/users");
const setRole = require("../../controller/users/userRole");

// router.get("/").post("/").put("/").delete("/").patch("/").patch();

// an point ---- api/v1/users
router.route("/").get(allUser.getAllUserData).patch(allUser.updateRouterAccess);
router.route("/postUser").post(allUser.saveAUser);
router
  .route("/:email")
  .get(allUser.getSingleUser)
  .put(allUser.updateUser)
  .patch(setRole.makeModerator)
  .delete(allUser.deleteUser);
module.exports = router;
