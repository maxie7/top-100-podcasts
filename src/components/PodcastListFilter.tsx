import React from 'react';
import usePodcastStore from '../core/infrastructure/state';

type PodcastListFilterProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  query: string
}
const PodcastListFilter = ({ query, setQuery }: PodcastListFilterProps) => {
  const { podcast } = usePodcastStore();

  return (
    <div className="primary__filter">
      <div className="primary__filter__counter">{podcast.filteredTitles}</div>
      <input
        className="primary__filter__input"
        type="text" placeholder="Filter podcasts..."
        defaultValue={query || ''}
        onChange={(e) => setQuery((e.target.value).toLowerCase())} />
    </div>
  );
};

export default PodcastListFilter;
