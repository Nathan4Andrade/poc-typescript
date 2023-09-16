export type Music = {
  id: number;
  title: string;
  artist: string;
};

export type CreateMusicData = Omit<Music, "id">;

export type Error = {
  type: string;
  message: string;
  status: number;
};
