import { musicController } from "@/controllers/music.controller";
import { Router } from "express";

const musicRouter = Router();

musicRouter.get("/music", musicController.getMusic);
musicRouter.post("/music", musicController.postMusic);
musicRouter.put("/music", musicController.updateMusic);
musicRouter.delete("/music", musicController.deleteMusic);

export default musicRouter;
