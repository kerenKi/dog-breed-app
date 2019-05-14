export function setDogImages(dogbreeds) {
    // Secure action name
    const SET_DOGIMAGES = "SET_DOGIMAGES";
    return {
      type: SET_DOGIMAGES,
      payload: dogbreeds
    };
  }
  