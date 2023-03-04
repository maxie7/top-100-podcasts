import { API } from '../../api/api';

export const getPodcastChapters = async (id) => {
  const podcastChapters = await API.requestChapters(id);
  // TODO: implement error handling

  return podcastChapters.data.results;
};
