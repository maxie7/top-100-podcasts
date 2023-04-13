import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import PodcastDetailsPage from './pages/PodcastDetailsPage';
import PodcastListPage from './pages/PodcastListPage';
import PodcastChapter from './pages/PodcastChapter';

const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastListPage />} />
      <Route path="/podcast/:id" element={<PodcastDetailsPage />} />
      <Route path="/podcast/:id/chapter/:id" element={<PodcastChapter />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
