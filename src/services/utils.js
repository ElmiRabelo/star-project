//Will receive the character url and take the digit from it, that will be used to get the character image
export function getImageId(url) {
  return url.match(/\d/)[0];
}
