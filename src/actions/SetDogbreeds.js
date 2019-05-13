export function fetchDogBreeds(dogbreeds) {
  return {
    type: "SET_DOGBREEDS",
    payload: dogbreeds
  };
}
