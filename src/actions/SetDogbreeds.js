export function setDogBreeds(dogbreeds) {
  // Secure action name
  const SET_DOGBREEDS = "SET_DOGBREEDS";
  return {
    type: SET_DOGBREEDS,
    payload: dogbreeds
  };
}
