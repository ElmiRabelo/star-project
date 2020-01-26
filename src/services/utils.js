//Will receive the character url and take the digit from it, that will as id
export function getId(url) {
  return url.match(/\d+/g)[0];
}
