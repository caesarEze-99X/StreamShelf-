import { NetInfoState } from '@react-native-community/netinfo';

export const handleNetworkFailure = (networkStatus: NetInfoState) => {
  if (!networkStatus.isConnected && !networkStatus.isInternetReachable) {
    throw new Error('A Network Error has occurred');
  }
};
