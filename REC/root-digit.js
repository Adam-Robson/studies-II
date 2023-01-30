//  input:  number - output:  number

let num = 1455794343

function rootDigits(num) {
  const digits = num.toString().split('');
  const numbers = digits.map(d => +d);
  const sum = numbers.reduce((sum, n) => sum + n);
  sum > 9 ? rootDigits(sum) : sum;
}

rootDigits(num);


