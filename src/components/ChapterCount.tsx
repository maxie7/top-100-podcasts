import React from 'react';

type ChapterCountProps = {
  countChapters: number
};

const ChapterCount = ({ countChapters }: ChapterCountProps) => (
    <h2 className="podcast__counter">Episodes: {countChapters}</h2>
);

export default ChapterCount;
