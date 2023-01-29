/* higher order function */

/* Write a function addFirst that takes a parameter element and returns a function that takes an array and returns a new array with element as the first element plus all the elements of the passed array */

//  Try 1
//  const addFirst = (element) => {
//   const arrayFn = (array) => array.unshift(element); 
//   return arrayFn;
// }

//  Try 2
const addFirst = (el) => {
  return function (arr) {
    arr.unshift(el);
    return arr
  }
}