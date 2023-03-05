import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PodcastListPage from '../../pages/PodcastListPage';

describe('PodcastListPage component', () => {
  it('should render component Podcast List Page', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PodcastListPage />);

    expect(renderer.render(<PodcastListPage />)).toMatchSnapshot();
  });
});
