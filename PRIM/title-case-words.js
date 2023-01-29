//  input:  string - output:  string

function titleCase(str) {
  let nuArr = [];
  let array = str.toLowerCase().split(' ');
  array.map((word) => {
    let letters = word.split('');
    let first = letters.shift();
    let capital = first.toUpperCase()
    let newWord = capital + letters.join('');
    nuArr.push(newWord)
  })
  return nuArr.join(' ');
}

//  console.log(titleCase('adAm hihiII));
//  output:  Adam Hihiii