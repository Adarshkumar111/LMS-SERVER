import Router from "express";
import { getCurrentUser } from "../controller/user.controller.js";
import isAuth from "../middleware/auth.middleware.js";

const router=Router();

//get current user
router.get("/getcurrentuser", isAuth, getCurrentUser)

export default router;