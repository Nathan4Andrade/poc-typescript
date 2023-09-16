import { CreateMusicData, Music } from "@/protocols";
import { musicService } from "@/services/music.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getMusics(req: Request, res: Response) {
  const musics = await musicService.getMusics();
  res.send(musics);
}

async function getMusicById(req: Request, res: Response) {
  const { id } = req.params;
  const music = await musicService.getMusicById(Number(id));
  res.send(music);
}

async function getRandomMusic(req: Request, res: Response) {
  const randomMusic = await musicService.getRandomMusic();
  res.send(randomMusic);
}

async function postMusic(req: Request, res: Response) {
  const music = req.body as CreateMusicData;
  await musicService.postMusic(music);
  res.sendStatus(httpStatus.CREATED);
}

async function updateMusic(req: Request, res: Response) {
  const { id } = req.params;
  const music = req.body as CreateMusicData;
  await musicService.updateMusic(Number(id), music);
  res.sendStatus(200);
}

async function deleteMusic(req: Request, res: Response) {
  const { id } = req.params;
  await musicService.deleteMusic(Number(id));
  res.sendStatus(200);
}

export const musicController = {
  getMusics,
  getMusicById,
  getRandomMusic,
  postMusic,
  updateMusic,
  deleteMusic,
};
