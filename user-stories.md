# User Stories

## Actor: User

| User Story                                                                                        | Acceptance Criteria                                                                                              | IsCompleted                       |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Should not be able to run the word count tool (WCT) without a filepath                            | Run WCT without filepath input. Should get an error. The tool should exit.                                       | <input type="checkbox" />         |
| Should be able to provide filepath input to the WCT                                               | Run WCT along with the filepath as command line arguments.                                                       | <input type="checkbox" checked /> |
| Should be able to provide multiple filepaths as command line arguments to the WCT                 | Run WCT with multiple space separated filepaths. Should not get an error.                                        | <input type="checkbox" checked /> |
| Should be allowed to provide any long option flag for bytes, chars, lines, max-line-length, words | Run WCT with valid filepaths. Provide any one long option flag. Should not get an error.                         | <input type="checkbox" checked /> |
| Should be allowed to provide any short option flag for c, m, l, L or w                            | Run WCT with valid filepaths. Provide any one short option flag. Should not get an error                         | <input type="checkbox" checked /> |
| Should be allowed to provide any combination of long and short flag options                       | Run WCT with valid filepaths. Use a combination of long and short flags. Should not get an error                 | <input type="checkbox" checked /> |
| Should get the character count when -c and/or --chars option is enabled                           | Run WCT with a valid filepath and -c and/or --chars option enabled. Should give the character count in the file. | <input type="checkbox" />         |

## Actor: System

| User Story                                                         | Acceptance Criteria                                           | IsCompleted               |
| ------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------- |
| Should be able to read the contents of a file                      | Open a file in read mode. Should be able to get its contents. | <input type="checkbox" /> |
| Should get an error when trying to read a file that does not exist | Open a file that does not exist. Should get an error.         | <input type="checkbox" /> |

## Actor: Word Counter

| User Story                                              | Acceptance Criteria                                          | IsCompleted                       |
| ------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Should be able to get the line count of a string        | Should return the number of new line characters in a string  | <input type="checkbox" checked /> |
| Should be able to get the word count of a string        | Should return the number of words in a string                | <input type="checkbox" checked /> |
| Should be able to get the character count of a string   | Should return the number of UTF-8 characters in a string     | <input type="checkbox" checked /> |
| Should be able to get the bytes count taken by a string | Should return the number of bytes required to store a string | <input type="checkbox" checked /> |
