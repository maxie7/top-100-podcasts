import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePodcastStore from '../core/infrastructure/state';
import Header from '../components/Header';
import ChapterCount from '../components/ChapterCount';
import PodcastLeftSection from '../components/PodcastLeftSection';
import PodcastRightSection from '../components/PodcastRightSection';
import { getPodcastChapters } from '../core/application/getPodcastChaptersService';

const PodcastDetailsPage = (): JSX.Element => {
  const { podcast } = usePodcastStore();
  const { id } = useParams<{id: string | ''}>();
  const stored = localStorage.getItem('podcastsList') || '';
  const getStoredPodcast = JSON.parse(stored).value.filter((item: any = {}) => item.id.attributes['im:id'] === id);
  const [chapters, setChapters] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const now = new Date().getTime();
    const storedId = localStorage.getItem(id ?? '');
    const storedPodcastItem = JSON.parse(localStorage.getItem('PodcastData') || '').id;

    const getChaptersData = async (id: string | '') => {
      const chaptersData = await getPodcastChapters(id);
      chaptersData.shift();
      const chapters = {
        value: chaptersData,
        expiry: now + 1000 * 60 * 60 * 24
      };
      localStorage.setItem(id, JSON.stringify(chapters));
      setChapters(chaptersData);
      localStorage.setItem('PodcastData', JSON.stringify(podcast));
      setIsLoaded(true);
    };

    if (!storedId || now > JSON.parse(storedId).expiry) {
      getChaptersData(id ?? '');
    } else if (storedPodcastItem !== id) {
      localStorage.setItem('PodcastData', JSON.stringify(podcast));
      setChapters(JSON.parse(storedId).value);
      setIsLoaded(true);
    } else {
      setChapters(JSON.parse(storedId).value);
      setIsLoaded(true);
    }
  }, [id, podcast]);

  try {
    const countChapters = Array.isArray(chapters) ? chapters.length : 0;
    return (
      <div className="container">
        <Header isLoaded={isLoaded} />
        <div className="podcast">
          <PodcastLeftSection />
          <div className="podcast__container">
            <ChapterCount countChapters={countChapters} />
            <PodcastRightSection chapters={chapters} id={getStoredPodcast[0].id.attributes['im:id']} />
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.log(error.message);
    return (
      <>
        <Header isLoaded={isLoaded} />
        <div className="podcast">
          <PodcastLeftSection />
          <div className="podcast__container">
            <ChapterCount countChapters={0} />
            <p style={{ textAlign: 'center' }}>A Problem with Podcast Feed: {error.message}</p>
          </div>
        </div>
      </>
    );
  }
};

export default PodcastDetailsPage;
