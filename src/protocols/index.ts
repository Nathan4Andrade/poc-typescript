export type Music = {
  id: number;
  title: string;
  artist: string;
};

export type CreateMusicData = Omit<Music, "id">;
