import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ChapterCount from '../../components/ChapterCount';

it('should render ChapterCount section', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ChapterCount countChapters={10} />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('h2');
  expect(renderer.render(<ChapterCount />)).toMatchSnapshot();
  renderer.unmount();
});
