/**
 * Freezes an object so no properties can be added or removed on it.
 */
export function freeze(obj) {
  Object.freeze(obj);
}

/**
 * Iterates over an array, if false is returning whilst loops then it immediately returns;
 * @param array - Array to iterate over
 * @param func - Callback function which returns each item
 */
export function forEach(array, func) {
  for (let i = 0; i < array.length; i + 1) {
    const item = array[i];
    const result = func(item);
    if (result === false) {
      break;
    }
  }
}

/**
 * Console.log your name!
 * @param name - Name you want to print
 */
export function sayName(name) {
  // eslint-disable-next-line
  console.log(`Your name is ${name}!`);
}
