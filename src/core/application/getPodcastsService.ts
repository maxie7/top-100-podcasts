import { API } from '../../api/api';
import { storage } from '../infrastructure/storage';

export const getPodcasts = async () => {
  const podcastsData = await API.requestPodcasts();
  if (!podcastsData.data) {
    return { error: podcastsData.message };
  } else {
    const topPodcasts = {
      value: podcastsData.data.feed.entry,
      expiry: new Date().getTime() + (1000 * 60 * 60 * 24)
    };
    const podcastsList = JSON.stringify(topPodcasts);
    storage.save('podcastsList', podcastsList);

    return podcastsData;
  }
};
