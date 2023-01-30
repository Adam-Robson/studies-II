//   input: number - output:  string

const oddishOrEvenish = (n) => {
  let init = 0;
  let strOb = new String(n);
  let str = strOb.toString();
  let arr = str.split('');
  arr.map(i => init += Number(i));
  return init % 2 === 0 ? 'evenish' : 'oddish';
}
