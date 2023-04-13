import React, { useEffect } from 'react';
import usePodcastStore from '../core/infrastructure/state';
import { Link } from 'react-router-dom';

type PodcastListItemsProps = {
  items: Array<object>,
  query: string
};

const PodcastListItems = ({ items, query }: PodcastListItemsProps) => {
  const { podcast, setPodcast, setFilteredTitles } = usePodcastStore();
  const search = (items: Array<object>) => {
    return items.filter((item: any = {}) =>
      items.some(() => item['im:name'].label.toString().toLowerCase().includes(query) || item['im:artist'].label.toString().toLowerCase().includes(query))
    );
  };
  const titles = search(items).map((item: any = {}) => {
    const podcastId = item.id.attributes['im:id'];
    const handleClick = () => {
      setPodcast(podcastId, item['im:image'][2].label, item['im:name'].label, item['im:artist'].label, item.summary.label);
      localStorage.setItem('PodcastData', JSON.stringify(podcast));
    };
    return (
      <div className="primary__card" key={item.id.attributes['im:id']} tabIndex={podcastId}>
        <Link to={`/podcast/${podcastId}`} onClick={handleClick}>
          <img className="primary__card__image" src={item['im:image'][2].label} alt="podcast_image" />
          <h2 className="primary__card__title">{item['im:name'].label.toUpperCase()}</h2>
          <h3 className="primary__card__author">Author: {item['im:artist'].label}</h3>
        </Link>
      </div>
    );
  });

  useEffect(() => {
    setFilteredTitles(titles.length);
  }, [titles.length]);

  if (titles.length === 0) {
    return <h2 className="primary__card__title">No Podcasts</h2>;
  } else {
    return <div className="primary">{titles}</div>;
  }
};

export default PodcastListItems;
