import { WordCounter } from "./word-counter";

describe("WordCounter", () => {
  var str: string;
  var count: {
    line: number;
    word: number;
    char: number;
    byte: number;
    maxLineLength: number;
  };

  beforeAll(() => {
    str = `Language	Translation
          Afrikaans:	Hello Wêreld!
          Albanian:	Përshendetje Botë!
          Amharic:	ሰላም ልዑል!
          Arabic:	مرحبا بالعالم!
          Armenia:	Բարեւ աշխարհ!
          Basque:	Kaixo Mundua!
          Belarussian:	Прывітанне Сусвет!
          Bengali:	ওহে বিশ্ব!
          Bulgarian:	Здравей свят!
          Catalan:	Hola món!
          Chichewa:	Moni Dziko Lapansi!
          Chinese:	你好世界！
          Croatian:	Pozdrav svijete!
          Czech:	Ahoj světe!
          Danish:	Hej Verden!
          Dutch:	Hallo Wereld!`;
    count = {
      line: 16,
      word: 50,
      char: 564,
      byte: 657,
      maxLineLength: 43,
    };
  });

  it("Should be able to get the line count of a string", () => {
    // Given

    // When
    const receivedLineCount = WordCounter.getLineCount(str);

    // Then
    expect(receivedLineCount).toEqual(count.line);
  });

  it("Should be able to get the word count of a string", () => {
    // Given

    // When
    const receivedWordCount = WordCounter.getWordCount(str);

    // Then
    expect(receivedWordCount).toEqual(count.word);
  });

  it("Should be able to get the character count of a string", () => {
    // Given

    // When
    const receivedCharCount = WordCounter.getCharCount(str);

    // Then
    expect(receivedCharCount).toEqual(count.char);
  });

  it("Should be able to get the byte count of a string", () => {
    // Given

    // When
    const receivedByteCount = WordCounter.getByteCount(str);

    // Then
    expect(receivedByteCount).toEqual(count.byte);
  });

  it("Should be able to get the length of the longest line in a string", () => {
    // Given

    // When
    const receivedMaxLineLength = WordCounter.getMaxLineLength(str);

    // Then
    expect(receivedMaxLineLength).toEqual(count.maxLineLength);
  });
});
