import { useEffect } from 'react';
import {
  CAROUSEL_CONSTANTS,
  FAVORITE_MOVIE_SECTION_ID,
  FAVORITE_MOVIE_TV_SHOW_SECTION_ID,
} from 'shared/carousel/constants/constant';
import { getFavoriteMovies } from 'shared/carousel/service/getFavoriteMovies';
import { getFavoriteTVShows } from 'shared/carousel/service/getFavoriteTVShows';
import { getRatedTVShows } from 'shared/carousel/service/getRatedTvShows';
import { useCarouselStore } from 'shared/carousel/store/Carousel';
import { CarouselData, CarouselFetchHook, Content, ContentApiResponse } from 'shared/types';

const useCarouselFetch = (sectionId: string): CarouselFetchHook => {
  const { carouselData, updateStoreItem } = useCarouselStore(state => ({
    carouselData: state.carouselData,
    updateStoreItem: state.updateStoreItem,
  }));

  const carouselDataObj: CarouselData = carouselData[sectionId];

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async (): Promise<void> => {
    startDataRetrieval();

    try {
      const apiResponse: ContentApiResponse | undefined = await getApiService()?.();
      if (apiResponse) {
        const contentData: Array<Partial<Content>> = cleanUpData(apiResponse);
        updateStoreItem(sectionId, { errorFetchingData: false, data: contentData, loading: false });
      }
    } catch {
      updateStoreItem(sectionId, { errorFetchingData: true, data: [], loading: false });
    }
  };

  const startDataRetrieval = (): void =>
    updateStoreItem(sectionId, { errorFetchingData: false, data: [], loading: true });

  const cleanUpData = (apiResponse: ContentApiResponse): Array<Partial<Content>> =>
    apiResponse.results.map((data: Partial<Content>) => ({
      title: data.title,
      overview: data.overview,
      backdrop_path: data.backdrop_path
        ? `${CAROUSEL_CONSTANTS.API.BACKDROP_POSTER_URL}${data.backdrop_path}`
        : undefined,
      poster_path: `${CAROUSEL_CONSTANTS.API.POSTER_BASE_URL}${data.poster_path}`,
    }));

  const getApiService = (): (() => Promise<ContentApiResponse>) | null => {
    let apiToUse = null;

    if (sectionId === FAVORITE_MOVIE_SECTION_ID) {
      apiToUse = getFavoriteMovies;
    } else if (sectionId === FAVORITE_MOVIE_TV_SHOW_SECTION_ID) {
      apiToUse = getFavoriteTVShows;
    } else {
      apiToUse = getRatedTVShows;
    }
    return apiToUse;
  };

  return {
    data: carouselDataObj?.data ?? [],
    loading: carouselDataObj?.loading ?? false,
    errorFetchingData: carouselDataObj?.errorFetchingData ?? false,
  };
};

export default useCarouselFetch;
