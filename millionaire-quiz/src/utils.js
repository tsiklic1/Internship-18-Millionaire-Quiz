export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const letters = ["A: ", "B: ", "C: ", "D: "];

export const scores = [
  "$100",
  "$200",
  "$300",
  "$500",
  "$1000",
  "$2000",
  "$4000",
  "$8000",
  "$16000",
  "$32000",
  "$64000",
  "$125000",
  "$250000",
  "$500000",
  "$1000000",
];
