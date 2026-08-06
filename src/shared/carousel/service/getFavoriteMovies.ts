import { NetInfoState, fetch as networkFetch } from '@react-native-community/netinfo';
import { CAROUSEL_CONSTANTS } from 'shared/carousel/constants/constant';
import { ContentApiResponse } from 'shared/types';
import { handleNetworkFailure } from 'shared/util';

export const getFavoriteMovies = async (): Promise<ContentApiResponse> => {
  const networkStatus: NetInfoState = await networkFetch();
  handleNetworkFailure(networkStatus);

  const response = await fetch(`${CAROUSEL_CONSTANTS.API.CONTENT_BASE_URL}/movie/popular?page=1`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${CAROUSEL_CONSTANTS.CONTENT_ACCESS_TOKEN}`,
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error retrieving movies: ${response.status}`);
  }

  return response.json() as Promise<ContentApiResponse>;
};
