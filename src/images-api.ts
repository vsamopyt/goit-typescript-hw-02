// TS
import axios from 'axios';
import { Data } from './types';

interface IParams {
  query: string;
  page: number;
  per_page: number;
  orientation: 'landscape' | 'portrait'; // 'landscape',
}

const accesKey: string = 'cZ-MFVyM7oimReB-5_cwTBy1PuN0gxZ0UbQfuk-h5hY';

const perPage: number = 12;

axios.defaults.headers.common['Authorization'] = `Client-ID ${accesKey}`;
axios.defaults.headers.common['Accept-Version'] = `1`;
axios.defaults.baseURL = `https://api.unsplash.com`;

export async function fetchImagesByTopic(
  topic: string,
  currentPage: number
): Promise<Data> {
  const params: IParams = {
    query: topic,
    page: currentPage,
    per_page: perPage,
    orientation: 'landscape',
  };
  const response = await axios.get<Data>('/search/photos', { params });

  return response.data;
}
