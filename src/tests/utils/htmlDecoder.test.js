import { htmlDecode } from '../../utils/htmlDecoder';

it('should decode text removing redundant symbols', () => {
  const input = 'CLUBLIFE by Tiësto Episode 826\n Hosted on Acast. See acast.com/privacy for more information.';
  const expectedOutput = 'CLUBLIFE by Tiësto Episode 826<br /> Hosted on Acast. See acast.com/privacy for more information.';
  const result = htmlDecode(input);
  expect(result).toStrictEqual(expectedOutput);
});
