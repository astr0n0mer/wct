import { readFileSync } from "fs";
import { parseArgs } from "util";
import { WordCounter } from "./word-counter";
import { allowedFlags, printHelp, WordCount } from "./word-counter-config";

/**
 * This function is used to read the filepaths and flags command line arguments from the user.
 * @returns An object with filepaths and flags entered by the user.
 */
export const getUserInputs = () => {
  const { values: receivedFlags, positionals: filepaths } = parseArgs({
    options: allowedFlags,
    args: process.argv.slice(2),
    allowPositionals: true,
  });

  const flags = Object.keys(receivedFlags);
  // todo: remove this later
  console.log(flags);
  console.log(filepaths);
  return { flags, filepaths };
};

/**
 *
 * @param str String whose byte, character, word & line counts and maximum line length are to be found.
 * @returns An object with the byte, character, word & line counts and maximum line length.
 */
export const getStringWordCounts = (str: string) => {
  const count: WordCount = {};

  if (flags.includes("bytes") || !flags.length)
    count.bytes = WordCounter.getByteCount(str);

  if (flags.includes("chars")) count.chars = WordCounter.getCharCount(str);

  if (flags.includes("lines") || !flags.length)
    count.lines = WordCounter.getLineCount(str);

  if (flags.includes("max-line-length"))
    count["max-line-length"] = WordCounter.getMaxLineLength(str);

  if (flags.includes("words") || !flags.length)
    count.words = WordCounter.getWordCount(str);

  return count;
};

/**
 *
 * @param totalCount The accumulative byte, character, word & line count and maximum line length.
 * @param count The byte, character, word & line count and maximum line length for the current file.
 */
export const updateTotalCounts = (totalCount: WordCount, count: WordCount) => {
  flags.forEach((flag: string) => {
    if (flag === "max-line-length") {
      totalCount["max-line-length"] = Math.max(
        totalCount["max-line-length"] ?? 0,
        count["max-line-length"] ?? 0
      );
    } else {
      // @ts-ignore
      totalCount[flag] = (totalCount[flag] ?? 0) + count[flag];
    }
  });
};

/**
 *
 * @param count The byte, character, word & line count and maximum line length for the current file.
 * @param filepath The filepath of the current file.
 */
export const printFileWordCounts = (count: WordCount, filepath: string) => {
  let output = "";
  output += count.lines ? count.lines + "\t" : "";
  output += count.words ? count.words + "\t" : "";
  output += count.chars ? count.chars + "\t" : "";
  output += count.bytes ? count.bytes + "\t" : "";
  output += count["max-line-length"] ? count["max-line-length"] + "\t" : "";
  output += filepath;

  console.log(output);
};

const { filepaths, flags } = getUserInputs();
const totalCount: WordCount = {};

if (flags.includes("help")) {
  printHelp();
} else if (filepaths.length < 1) {
  printHelp();
  throw new Error("NO_FILEPATH_SPECIFIED");
} else {
  filepaths.forEach((filepath: string) => {
    try {
      const content = readFileSync(filepath, { encoding: "utf-8" });
      const count = getStringWordCounts(content);
      updateTotalCounts(totalCount, count);
      printFileWordCounts(count, filepath);
    } catch (err) {
      console.log(`${filepath}: No such file or directory`);
    }
  });

  if (filepaths.length > 1) {
    printFileWordCounts(totalCount, "total");
  }
}
