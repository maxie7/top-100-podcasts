import React from 'react';
import usePodcastStore from '../core/infrastructure/state';

const PodcastLeftSection:React.FC = () => {
  const { podcast } = usePodcastStore();
  const stored = JSON.parse(localStorage.getItem('PodcastData') || '');

  return (
    <>
      <div className="podcast__left_section">
        <img className="podcast__left_section__image" src={podcast.image ?? stored.image} alt="podcast_image" />
        <div className="podcast__left_section__text">
          <h4 className="podcast__left_section__text__name">{podcast.title ?? stored.title}</h4>
          <h5 className="podcast__left_section__text__artist">by {podcast.artist ?? stored.artist} </h5>
          <h5 className="podcast__left_section__text__description__title">Description:</h5>
          <h5 className="podcast__left_section__text__description__text">{podcast.description ?? stored.description}</h5>
        </div>
      </div>
    </>
  );
};

export default PodcastLeftSection;
