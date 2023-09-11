import { EOL } from "os";

/**
 * This class provides static methods to get byte, character, word & line count in a string. It also gives the maximum line lelngth in case of a multi-line string.
 */
export class WordCounter {
  private constructor() {}

  /**
   *
   * @param s String whose line count is to be found.
   * @returns Number of lines in  `s`.
   */
  public static getLineCount = (s: string): number =>
    s.match(/\n/g)?.length ?? 0;

  /**
   *
   * @param s String whose word count is to be found.
   * @returns Number of words in `s`.
   */
  public static getWordCount = (s: string): number => {
    if (!s.length) return 0;

    return s.split(/[\s\t\n]+/).length;
  };

  /**
   *
   * @param s String whose character count is to be found.
   * @returns Number of characters in `s`.
   */
  public static getCharCount = (s: string): number => s.length;

  /**
   *
   * @param s String whose byte count is to be found.
   * @returns Number of bytes taken by `s`.
   */
  public static getByteCount = (s: string): number => new Blob([s]).size;

  /**
   *
   * @param s String who maximum line length is to found.
   * @returns Number of characters in the longest line of `s`.
   */
  public static getMaxLineLength = (s: string) => {
    if (!s.length) return 0;

    const lines = s.split(/[\r\n]{1,2}/);
    const linesLength = lines.map((line) => line.length);
    const maxLineLength = linesLength.reduce((a, b) => Math.max(a, b), 0);
    return maxLineLength + EOL.length;
  };
}
