// Secure against typos
export const SET_DOGBREEDS = "SET_DOGBREEDS";

export function setDogBreeds(dogbreeds) {
  // Direct return of action object
  return {
    type: SET_DOGBREEDS,
    payload: dogbreeds
  };
}