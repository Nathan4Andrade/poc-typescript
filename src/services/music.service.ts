import { errors } from "@/errors";
import { CreateMusicData, Music } from "@/protocols";
import { musicRepository } from "@/repositories/music.repository";

async function getMusicById(id: number): Promise<Music> {
  const music = await musicRepository.getMusicById(id);
  if (!music) throw errors.notFound();
  return music;
}

async function getMusics(): Promise<Music[]> {
  const musics = await musicRepository.getMusics();
  return musics;
}

async function postMusic(music: CreateMusicData): Promise<void> {
  await musicRepository.postMusic(music);
}

async function updateMusic(id: number, music: CreateMusicData): Promise<void> {
  const existingMusic = await musicRepository.getMusicById(id);
  if (!existingMusic) throw errors.notFound();
  const updatedMusic: Music = {
    id,
    title: music.title,
    artist: music.artist,
  };
  await musicRepository.updateMusic(updatedMusic);
}

async function deleteMusic(id: number): Promise<void> {
  const existingMusic = await musicRepository.getMusicById(id);
  if (!existingMusic) throw errors.notFound();
  await musicRepository.deleteMusic(existingMusic);
}

export const musicService = {
  getMusicById,
  getMusics,
  postMusic,
  updateMusic,
  deleteMusic,
};
