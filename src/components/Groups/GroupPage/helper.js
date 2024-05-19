export const sortedScores = (todaysScores, correctWord) => {
  function customSort(a, b) {
    // Rule 1: Sort by the length of the word list containing the correct word
    let aContainsWord = a.guesses.includes(correctWord);
    let bContainsWord = b.guesses.includes(correctWord);

    if (aContainsWord !== bContainsWord) {
      return aContainsWord ? -1 : 1;
    }

    if (
      aContainsWord &&
      bContainsWord &&
      a.guesses.length !== b.guesses.length
    ) {
      return a.guesses.length - b.guesses.length;
    }

    // Rule 2: Then by the length of the word list
    if (a.guesses.length !== b.guesses.length) {
      return a.guesses.length - b.guesses.length;
    }

    // Rule 3: Then alphabetically by username
    return a.userId.localeCompare(b.userId);
  }
  todaysScores.sort(customSort);
  return todaysScores;
};
