export interface Game {
  background_image: string;
  name: string;
  release: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Genre[];
  parent_platforms: ParentPlatform[];
  publisher: Publisher[];
  ratings: Rating[];
  screenshots: Screenshot[];
  trailers: Trailer[];
}

export interface APIResponse<T> {
  results: T[];
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: { name: string };
}

interface Publisher {
  name: string;
}

interface Rating {
  id: number;
}

interface Screenshot {
  image: string;
}

interface Trailer {
  data: { max: string };
}
