import express from "express";
import { login, logout, singup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", singup);

router.post("/login", login);

router.post("/logout", logout);

export default router;

//W8flONN1pN8wyVwm;
//mongodb+srv://vermaranjan62:<db_password>@cluster0.urr6t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
