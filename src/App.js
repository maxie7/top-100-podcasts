import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import PodcastDetailsPage from './pages/PodcastDetailsPage';
import PodcastListPage from './pages/PodcastListPage';
import PodcastChapter from './pages/PodcastChapter';

function App () {
  return (
    <BrowserRouter basename="/mini-podcast">
      <Routes>
        <Route path="/" element={<PodcastListPage />} />
        <Route path="/podcast/:id" element={<PodcastDetailsPage />} />
        <Route path="/podcast/:id/chapter/:id" element={<PodcastChapter />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
