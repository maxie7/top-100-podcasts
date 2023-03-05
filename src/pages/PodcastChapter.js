import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import usePodcastStore from '../core/infrastructure/state';
import Header from '../components/Header';
import PodcastLeftSection from '../components/PodcastLeftSection';
import { htmlDecode } from '../utils/htmlDecoder';

const PodcastChapter = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { podcast } = usePodcastStore();
  const params = useParams();
  const podcastItem = podcast.id ?? JSON.parse(localStorage.getItem('PodcastData')).id;
  const chapterList = JSON.parse(localStorage.getItem(podcastItem));
  const result = chapterList.value.filter((item) => item.trackId.toString().replace(/[:/]/gi, '') === params.id);

  useEffect(() => {
    const onPageLoad = () => {
      console.log('page loaded');
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  const description = htmlDecode(result[0].description);

  return (
    <>
      <Header isLoaded={isLoaded} />
      <PodcastLeftSection />
      <div className="chapter__container">
        <h2>{result[0].trackName}</h2>
        <div className="chapter__container__description">
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
        </div>
        <audio controls>
          <source src={result[0].episodeUrl} type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
};

export default PodcastChapter;
