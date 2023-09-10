export type WordCount = {
  bytes?: number;
  chars?: number;
  lines?: number;
  "max-line-length"?: number;
  words?: number;
};

export const allowedFlags = {
  bytes: {
    type: "boolean",
    short: "c",
  },
  chars: {
    type: "boolean",
    short: "m",
  },
  lines: {
    type: "boolean",
    short: "l",
  },
  "max-line-length": {
    type: "boolean",
    short: "L",
  },
  words: {
    type: "boolean",
    short: "w",
  },
  help: {
    type: "boolean",
    short: "h",
  },
} as const;

export const printHelp = () => {
  const help = `
Usage: wct [OPTION(S)] FILEPATH(S)

Example: wct -c -l file-1.txt file-2.html

-c, --bytes\t\t print the byte count
-m, --chars\t\t print the character count
-l, --lines\t\t print the line count
-L, --max-line-length\t print the length of the longest line
-w, --words\t\t print the word count
-h, --help\t\t print the help message
  `;
  console.log(help);
};
