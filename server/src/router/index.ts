import { Router } from "express";
import userController from "../controllers/UserController";
import { body } from "express-validator";

export const router = Router();

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
// router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/profile/:id");
