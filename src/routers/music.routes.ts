import { musicController } from "@/controllers/music.controller";
import { Router } from "express";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.get("/musics/:id", musicController.getMusicById);
musicRouter.get("/random-music", musicController.getRandomMusic);
musicRouter.post("/musics", musicController.postMusic);
musicRouter.put("/musics/:id", musicController.updateMusic);
musicRouter.delete("/music/:id", musicController.deleteMusic);

export default musicRouter;
