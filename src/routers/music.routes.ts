import { musicController } from "@/controllers/music.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { musicSchema } from "@/schemas/music.schema";
import { Router } from "express";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.get("/musics/:id", musicController.getMusicById);
musicRouter.post(
  "/musics",
  validateSchema(musicSchema),
  musicController.postMusic
);
musicRouter.put(
  "/musics/:id",
  validateSchema(musicSchema),
  musicController.updateMusic
);
musicRouter.delete("/musics/:id", musicController.deleteMusic);

export default musicRouter;
