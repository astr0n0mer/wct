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

export const showHelp = () => {
  console.log("Help is on the way.");
};
