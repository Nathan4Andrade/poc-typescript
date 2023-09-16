import Joi from "joi";
import { Music } from "protocols/index";

export const musicSchema = Joi.object<Music>({
  title: Joi.string().required(),
  artist: Joi.string().required(),
});
