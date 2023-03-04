import React from 'react';
import PropTypes from 'prop-types';

const ChapterCount = ({ countChapters }) => {
  return <h2 className="podcast__counter">Episodes: {countChapters} </h2>;
};

ChapterCount.propTypes = {
  countChapters: PropTypes.number
};

export default ChapterCount;
