import { EOL } from "os";

export class WordCounter {
  private constructor() {}

  public static getLineCount = (s: string): number =>
    s.match(/\n/g)?.length ?? 0;

  public static getWordCount = (s: string): number => {
    if (!s.length) return 0;

    return s.split(/[\s\t\n]+/).length;
  };

  public static getCharCount = (s: string): number =>
    s.length + WordCounter.getLineCount(s);

  public static getByteCount = (s: string): number =>
    new Blob([s]).size + WordCounter.getLineCount(s);

  public static getMaxLineLength = (s: string) => {
    if (!s.length) return 0;

    const lines = s.split(/[\r\n]{1,2}/);
    const linesLength = lines.map((line) => line.length);
    const maxLineLength = linesLength.reduce((a, b) => Math.max(a, b), 0);
    return maxLineLength + EOL.length;
  };
}
