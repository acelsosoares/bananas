export interface IGamesResponse {
  _embedded: {
    games: IGame[];
  }
}

export interface ICategoriesResponse {
  _embedded: {
    game_categories: ICategory[];
  }
}

export interface IGame {
  id?: string;
  slug?: string;
  background?: string;
  description?: string;
  game_stakes?: string;
  height?: string;
  width?: string;
  name?: string;
  thumbnail?: string;
  url?: string;
  created_at?: {
    date: string;
  };
  screenshot?: string;
  homepage_image?: string;
  vendor?: string;
  vendor_properties?: string;
  meta?: {
    description_short?: string;
    currency?: string;
    bonus?: boolean;
    free_spins?: boolean;
  };
  enabled?: boolean;
  label?: string;
  cols?: any;
  rows?: any;
  pos_x?: any;
  pos_y?: any;
  volatility?: number;
  rating?: number;
  backgrounds?: string[];
  screenshots?: string[];
  thumbnails?: {
    '280x280'?: string;
    '280x600'?: string;
    '600x280'?: string;
    legacy?: string;
  };
  jurisdiction?: string;
  login_required?: string;     
}

export interface ICategory {
  name?: string;
  order?: number;
  slug?: string;
  _embedded: {
    games?: IGame[];
  }
}