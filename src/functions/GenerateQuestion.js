export default function GenerateQuestion(dogbreeds) {
  // Make array of 3 random numbers:
  const randumNumberArray = [...Array(3)].map(_ =>
    Math.ceil(Math.random() * 86)
  );
  
  if (dogbreeds) {
    // Map and restructure
    const questionOptions = randumNumberArray.map(
      number => (number = { breed: dogbreeds[number], isWinner: false })
    );
    // Choose random winner and make isWinner true
    const randomWinner = Math.floor(Math.random() * 3);
    questionOptions[randomWinner].isWinner = true;
    return questionOptions;
  } else return null;
}
