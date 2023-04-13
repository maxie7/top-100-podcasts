import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDuration } from '../utils/helpers';

type PodcastRightSelectionProps = {
  chapters: number | Array<object>,
  id: string
}
const PodcastRightSection = ({ chapters, id }: PodcastRightSelectionProps) => {
  const navigate = useNavigate();
  const handleEpisodeClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, chapterId: string) => {
    e.preventDefault();
    console.log('type of chapterId', typeof chapterId);
    console.log('type of e', e);
    navigate(`/podcast/${id}/chapter/${chapterId.replace(/[:/]/gi, '')}`);
  };

  let chaptersTable: Array<any> = [];
  if (Array.isArray(chapters)) {
    chaptersTable = chapters.map((item: any = {}) => {
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

export default PodcastRightSection;
