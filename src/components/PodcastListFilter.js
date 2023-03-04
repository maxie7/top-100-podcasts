import usePodcastStore from '../core/infrastructure/state';
import PropTypes from 'prop-types';

const PodcastListFilter = ({ query, setQuery }) => {
  const { podcast } = usePodcastStore();
  const titlesQty = podcast.filteredTitles;

  return (
    <div className="primary__filter">
      <div className="primary__filter__counter">{titlesQty}</div>
      <input className="primary__filter__input" type="text" placeholder="Filter podcasts..." defaultValue={query || ''} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
};

PodcastListFilter.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string
};

export default PodcastListFilter;
