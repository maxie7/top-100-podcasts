import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

it('should render Header section', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('nav');
  expect(renderer.render(<Header />)).toMatchSnapshot();
  renderer.unmount();
});
