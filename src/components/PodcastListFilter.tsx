import React from 'react';
import usePodcastStore from '../core/infrastructure/state';

type PodcastListFilterProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  query: string
}
const PodcastListFilter = ({ query, setQuery }: PodcastListFilterProps) => {
  const { podcast } = usePodcastStore();
  const titlesQty = podcast.filteredTitles;

  return (
    <div className="primary__filter">
      <div className="primary__filter__counter">{titlesQty}</div>
      <input className="primary__filter__input" type="text" placeholder="Filter podcasts..." defaultValue={query || ''} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
};

export default PodcastListFilter;
