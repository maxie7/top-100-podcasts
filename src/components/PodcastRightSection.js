import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PodcastRightSection = ({ chapters, id }) => {
  const navigate = useNavigate();
  function formatDuration (ms) {
    const seconds = Math.trunc(ms / 1000);
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().slice(11, 19);
  }
  const handleEpisodeClick = (e, chapterId) => {
    e.preventDefault();
    navigate(`/podcast/${id}/chapter/${chapterId.replace(/[:/]/gi, '')}`);
  };

  let chaptersTable = [];
  if (Array.isArray(chapters)) {
    chaptersTable = chapters.map((item) => {
      const chapterId = item.trackId.toString();
      let duration = '--:--:--';
      if ('trackTimeMillis' in item) {
        duration = formatDuration(item.trackTimeMillis);
      }

      return (
        <tr key={chapterId} onClick={(e) => handleEpisodeClick(e, chapterId)}>
          <td>{item.trackName}</td>
          <td>{new Date(item.releaseDate).toLocaleDateString('en-UK')}</td>
          <td>{duration}</td>
        </tr>
      );
    });
  }

  return (
    <div className="podcast__table__container">
      <table className="podcast__table__table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>{chaptersTable}</tbody>
      </table>
    </div>
  );
};

PodcastRightSection.propTypes = {
  chapters: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  id: PropTypes.string
};

export default PodcastRightSection;
