import { Router } from "express";
import { loginUSer, newUser } from "../controllers/user";

const router = Router();
router.post("/", newUser);
router.post("/login", loginUSer);

export default router;
