import {
  ArticleStoreType
} from './article';

interface MusicStoreType {
  liveToursData: ILiveTours[];
  featuredRecordsData: IFeaturedRecords[];
  yanceyMusicData: IYanceyMusic[];
  getLiveTours: () => void;
  getFeaturedRecords: () => void;
  getYanceyMusic: () => void;
}

export interface IMusicProps {
  musicStore ? : MusicStoreType;
  articleStore ? : ArticleStoreType;
}

export interface ILiveTours {
  poster: string;
  title: string;
  upload_date: string;
  __v: number;
  _id: string;
}

export interface IFeaturedRecords {
  album_name: string;
  artist: string;
  buy_url: string;
  cover: string;
  release_date: string;
  __v: number;
  _id: string;
}

export interface IYanceyMusic {
  title: string;
  soundCloud_url: string;
  cover: string;
  release_date: string;
  __v: number;
  _id: string;
}