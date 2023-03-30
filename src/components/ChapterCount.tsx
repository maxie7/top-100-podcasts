import React from 'react';

type Props = {
  countChapters: number
};

const ChapterCount = ({ countChapters }: Props) => (
    <h2 className="podcast__counter">Episodes: {countChapters}</h2>
);

export default ChapterCount;
