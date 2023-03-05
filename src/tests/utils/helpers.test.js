import { formatDuration } from '../../utils/helpers';

it('should format milliseconds to human duration', () => {
  const input = 3630000;
  const expectedOutput = '01:00:30';
  expect(formatDuration(input)).toStrictEqual(expectedOutput);
});
