import { spawnSync } from "child_process";

describe("User", () => {
  var baseCommand = "";

  beforeAll(() => {
    baseCommand = "tsx index.ts";
  });

  it("Should be able to provide the filepath to get word count for it", () => {
    // Given
    const command = `${baseCommand} hello-world.txt`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain("'hello-world.txt'");
  });

  it("Should be able to provide multiple filepaths to get word count", () => {
    // Given
    const command = `${baseCommand} hello-world.txt bye-world.txt`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain("'hello-world.txt', 'bye-world.txt'");
  });

  it("Should not be required to provide any flag inputs", () => {
    // Given
    const command = `${baseCommand} hello-world.txt`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString().split("\n")[0];

    // Then
    expect(spawnOutput).toEqual("[]");
  });

  it("Should be able to provide any long option flag", () => {
    // Given
    const command = `${baseCommand} --chars --lines`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString().split("\n")[0];

    // Then
    expect(spawnOutput).toContain("'chars', 'lines'");
  });

  it("Should be able to provide any short option flag", () => {
    // Given
    const command = `${baseCommand} -c -w`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString().split("\n")[0];

    // Then
    expect(spawnOutput).toContain("'bytes', 'words'");
  });

  it("Should be able to provide any combination of long and short option flags", () => {
    // Given
    const command = `${baseCommand} -clw --chars --max-line-length`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString().split("\n")[0];

    // Then
    expect(spawnOutput).toContain(
      "'bytes', 'lines', 'words', 'chars', 'max-line-length'"
    );
  });

  it("Should get the byte count when a filepath is specified with -c or --bytes flag", () => {
    // Given
    const filepath = "./test-assets/_hello-world.txt";
    const actualByteCount = "2318";
    const command = `${baseCommand} -c ${filepath}`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain(actualByteCount);
  });

  it("Should get the character count when a filepath is specified with -m or --chars flag", () => {
    // Given
    const filepath = "./test-assets/_hello-world.txt";
    const actualCharCount = "1791";
    const command = `${baseCommand} -m ${filepath}`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain(actualCharCount);
  });

  it("Should get the line count when a filepath is specified with -l or --lines flag", () => {
    // Given
    const filepath = "./test-assets/_hello-world.txt";
    const actualLineCount = "74";
    const command = `${baseCommand} -l ${filepath}`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain(actualLineCount);
  });

  it("Should get the maximum line length value when a filepath is specified with -L or --max-line-length flag", () => {
    // Given
    const filepath = "./test-assets/_hello-world.txt";
    const actualMaxLineLength = "33";
    const command = `${baseCommand} -L ${filepath}`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain(actualMaxLineLength);
  });

  it("Should get the word count when a filepath is specified with -w or --words", () => {
    // Given
    const filepath = "./test-assets/_hello-world.txt";
    const actualWordCount = "229";
    const command = `${baseCommand} -w ${filepath}`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain(actualWordCount);
  });

  it("Should get the word and line count when a filepath is specified with both --words and --lines options", () => {
    // Given
    const filepath = "./test-assets/_hello-world.txt";
    const actualWordCount = "229";
    const actualLineCount = "74";
    const command = `${baseCommand} --words --lines ${filepath}`;

    // When
    const spawn = spawnSync(command, { shell: true });
    const spawnOutput = spawn.stdout.toString();

    // Then
    expect(spawnOutput).toContain(actualWordCount);
    expect(spawnOutput).toContain(actualLineCount);
  });
});
