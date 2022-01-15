import React from 'react';
import LectureList from './LectureList';

function LectureGroup(): JSX.Element {
  return (
    <div>
      <span>Best</span>
      <h2>이번주 베스트셀링 강의</h2>
      <LectureList />
    </div>
  );
}

export default LectureGroup;
