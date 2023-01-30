//  input:  positive integer - output:  array

function multiplesOfN(num) {
  let array = [];
  if (num < 51) {
    for (let i = num; i < 51; i++) {
      i % num === 0 ? array.push(i) : null;
    }
  }
  return array
}
