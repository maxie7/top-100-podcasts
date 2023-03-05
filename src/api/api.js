import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://itunes.apple.com'
});

const instanceCors = axios.create({
  baseURL: 'https://aquamarine-pastelito-b19eb5.netlify.app'
});

export const API = {
  async requestPodcasts () {
    const response = await instance.get('/us/rss/toppodcasts/limit=100/genre=1310/json')
      .catch(error => error);

    return response;
  },

  async requestChapters (id) {
    const response = await instanceCors.get(`/chapters?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)
      .catch(error => error);

    return response;
  }

  // async requestChapters (id) {
  //   const response = await instance.get(`/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)
  //     .catch(error => error);
  //
  //   return response;
  // }
};
