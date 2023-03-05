import { htmlDecode } from '../../utils/htmlDecoder';

describe('Test for transforming string html data', () => {
  it('should decode text removing redundant symbols', () => {
    const input = 'CLUBLIFE by Tiësto Episode 826\n Hosted on Acast. See acast.com/privacy for more information.';
    const expectedOutput = 'CLUBLIFE by Tiësto Episode 826<br /> Hosted on Acast. See acast.com/privacy for more information.';
    const result = htmlDecode(input);
    expect(result).toStrictEqual(expectedOutput);
  });
});
