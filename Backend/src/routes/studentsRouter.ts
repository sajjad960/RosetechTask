import express from "express";

// controller
import studentsController from "../controllers/studentsController";
import authCookieChecker from "../middleware/authCookieChecker";

const router = express.Router();

router.route("/").get(studentsController.getAllStudent);
router.route("/:id").get(studentsController.getSingleStudent);

// All Action Protected From Here
router.use(authCookieChecker());

router.route("/").post(studentsController.createStudent);
router
  .route("/:id")
  .put(studentsController.updateStudent)
  .patch(studentsController.updateStudent)
  .delete(studentsController.deleteStudent);

//Declare router as a studentsRouter
const studentsRouter = router;

export = studentsRouter;
