export default function GenerateQuestion(dogbreeds) {
  // Make an array of 3 random numbers:
  const randumNumberArray = [...Array(3)].map(_ =>
    Math.ceil(Math.random() * 86)
  );

  if (dogbreeds) {
    // Map over array and restructure it
    const questionOptions = randumNumberArray.map(
      number => (number = { breed: dogbreeds[number], isWinner: false })
    );
    // Choosing the winner randomly and change isWinner property to true:
    const randomWinner = Math.floor(Math.random() * 3);
    questionOptions[randomWinner].isWinner = true;
    return questionOptions;
  } else return null;
}
