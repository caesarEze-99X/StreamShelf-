import { MenuItem } from 'features/menu/types';
import { CAROUSEL_LIST_STRING } from './string';

/* NOTE* Access token will stay hidden in an env variable and accessed from there
 * but due to time constraint I will leave this here for now. Also URL goes to a JSON
 * So when CCS Remote config changes or a feature guarded by a feature flag it would
 * update URL accordingly */

/* Assigning random IDs to each row to make retreiving data more robust and reusable */

export const FAVORITE_MOVIE_SECTION_ID = '234432-streamshelf-welkf32';
export const FAVORITE_MOVIE_TV_SHOW_SECTION_ID = 'jkwfkj-89312n-qwdkjwqhod';
export const RATED_TV_SHOW_SECTION_ID: string = 'sgedweioduj-3e21-ascd';

/* NOTE* This list will be in the CCS config so when the sectionID changes it updates seamlessly */
export const CAROUSEL_DATA_LIST: Array<string> = [
  FAVORITE_MOVIE_SECTION_ID,
  FAVORITE_MOVIE_TV_SHOW_SECTION_ID,
  RATED_TV_SHOW_SECTION_ID,
];

export const CONSTANT_UNTYPED = {
  API: {
    CONTENT_BASE_URL: 'https://api.themoviedb.org/3',
    POSTER_BASE_URL: 'https://image.tmdb.org/t/p/w500',
    BACKDROP_POSTER_URL: 'https://image.tmdb.org/t/p/original',
  },
  SECTIONS: {
    [FAVORITE_MOVIE_SECTION_ID]: CAROUSEL_LIST_STRING.favoriteMovies,
    [FAVORITE_MOVIE_TV_SHOW_SECTION_ID]: CAROUSEL_LIST_STRING.favoriteTvShows,
    [RATED_TV_SHOW_SECTION_ID]: CAROUSEL_LIST_STRING.ratedTVShows,
  },
  ACCOUNT_ID: 23555333,
  CONTENT_ACCESS_TOKEN:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdlNDZjZDM3ZGE4ZjVkN2I3Yjk4Zjc4MWYxMGJlZCIsIm5iZiI6MTc4NTk4MjY5OC41NDcwMDAyLCJzdWIiOiI2YTczZWVlYTdhMmNiNWMzOTA4YjA0YzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LOr69h6Y0DErryuFM3xBhCKa_W62-2G2vUW7cwIRJ18',
};

type ConstantKeys = typeof CONSTANT_UNTYPED;

export const CAROUSEL_CONSTANTS: ConstantKeys = CONSTANT_UNTYPED;

export const MENU_LIST: Array<MenuItem> = ['Home', 'Bookmark'];
