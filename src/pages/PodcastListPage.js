import { useState, useEffect } from 'react';
import Header from '../components/Header';
import PodcastListItems from '../components/PodcastListItems';
import PodcastListFilter from '../components/PodcastListFilter';
import { getInitialValues } from '../utils/getInitialValues';
import { getPodcasts } from '../core/application/getPodcastsService';

const PodcastListPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [podcasts, setPodcasts] = useState(getInitialValues('podcastsList'));

  useEffect(() => {
    const now = new Date().getTime();
    const getPodcastsData = async () => {
      const podcastsData = await getPodcasts();
      if (podcastsData.error) {
        setIsLoaded(true);
        setError(podcastsData.error);
      } else {
        setPodcasts(podcastsData);
        setItems(podcastsData.data.feed.entry);
        setIsLoaded(true);
      };
    };

    if (!podcasts || now > podcasts.expiry) {
      getPodcastsData();
    } else {
      setIsLoaded(true);
      setItems(podcasts.value);
    }
  }, []);

  if (error) {
    return console.log('REQ ERROR:', error);
  } else {
    return (
      <>
        <Header isLoaded={isLoaded} />
        <div className="primary">
          <PodcastListFilter query={query} setQuery={setQuery} podcastsLength={items.length} />
          <PodcastListItems items={items} query={query} />
        </div>
      </>
    );
  }
};

export default PodcastListPage;
