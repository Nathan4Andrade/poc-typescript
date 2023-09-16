import { Request, Response } from "express";

async function getMusic(req: Request, res: Response) {
  res.sendStatus(200);
}

async function postMusic(req: Request, res: Response) {
  res.sendStatus(201);
}

async function updateMusic(req: Request, res: Response) {
  res.sendStatus(200);
}

async function deleteMusic(req: Request, res: Response) {
  res.sendStatus(200);
}

export const musicController = {
  getMusic,
  postMusic,
  updateMusic,
  deleteMusic,
};
