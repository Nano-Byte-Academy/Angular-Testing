import { ShortenTextPipe } from './shorten-text.pipe';

describe('ShortenTextPipe', () => {
  const pipe = new ShortenTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms long to short text', () => {
    expect(pipe.transform('My dog went for a stroll.')).toBe('My dog wen...');
  });

});
