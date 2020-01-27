//Will receive the character url and take the digit from it, that will as id
export function getId(url) {
  return url.match(/\d+/g)[0];
}

//receive an array of api responses and extract the data from it.
export function getData(arr) {
  return arr.map(value => value.data);
}
