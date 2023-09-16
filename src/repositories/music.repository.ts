import { CreateMusicData, Music } from "@/protocols";
import { db } from "@/database/database.connection";

async function getMusicById(id: number): Promise<Music> {
  const music = await db.query<Music>(`SELECT * FROM musics WHERE "id" = $1;`, [
    id,
  ]);
  return music.rows[0];
}

async function getMusics(): Promise<Music[]> {
  const musics = await db.query<Music>(`SELECT * FROM musics;`);
  return musics.rows;
}

async function postMusic(music: CreateMusicData) {
  await db.query<CreateMusicData>(
    `INSERT INTO musics ("title", "artist") VALUES ($1, $2);`,
    [music.title, music.artist]
  );
}

async function updateMusic(music: Music) {
  return await db.query<Music>(
    `UPDATE musics SET title=$2, artist=$3 WHERE id=$1;`,
    [music.id, music.title, music.artist]
  );
}

async function deleteMusic(music: Music) {
  return await db.query<Music>(`DELETE FROM musics WHERE id=$1`, [music.id]);
}

export const musicRepository = {
  getMusicById,
  getMusics,
  postMusic,
  deleteMusic,
  updateMusic,
};
