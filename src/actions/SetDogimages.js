// Secure against typos
export const SET_DOGIMAGES = "SET_DOGIMAGES";

export function setDogImages(dogbreeds) {
  // Direct return of action object
  return {
    type: SET_DOGIMAGES,
    payload: dogbreeds
  };
}
