import { Router } from "express";
import musicRouter from "./music.routes";

const router = Router();

router.use(musicRouter);

export default router;
