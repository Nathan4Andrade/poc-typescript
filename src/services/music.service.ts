import { CreateMusicData, Music } from "@/protocols";
import { musicRepository } from "@/repositories/music.repository";
import getRandomNumber from "@/utils/randomNumber";

async function getRandomMusic() {
  const musics = await musicRepository.getMusics();
  const randomId = musics[getRandomNumber(1, musics.length)].id;
  const music = await musicRepository.getMusicById(randomId);
  return music;
}

async function getMusicById(id: number) {
  const music = await musicRepository.getMusicById(id);
  return music;
}

async function getMusics() {
  const musics = await musicRepository.getMusics();
  return musics;
}

async function postMusic(music: CreateMusicData) {
  await musicRepository.postMusic(music);
}

async function updateMusic(id: number, music: CreateMusicData) {
  const existingMusic = await musicRepository.getMusicById(id);
  if (existingMusic) {
    const updatedMusic: Music = {
      id,
      title: music.title,
      artist: music.artist,
    };
    await musicRepository.updateMusic(updatedMusic);
  }
}

async function deleteMusic(id: number) {
  const existingMusic = await musicRepository.getMusicById(id);
  if (existingMusic) {
    await musicRepository.deleteMusic(existingMusic);
  }
}

export const musicService = {
  getRandomMusic,
  getMusicById,
  getMusics,
  postMusic,
  updateMusic,
  deleteMusic,
};
