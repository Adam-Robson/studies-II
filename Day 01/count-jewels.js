
/* While finding a solution, I came across the concept of Sets, which I find fun and interesting 
and like using when I can, there fore folowing the solution sketched out below, is a solution 
for the problem of finding the unique stones hypothetically present that are also jewels. */

function countJewels(jewels, stones) {
  let m = [];
  let e = jewels.split('')
  let s = stones.split('')
  e.filter(c => {
    s.map(i => {
      i === c ? m.push(i) : ''
    })
  })
  console.log(m.length)
}

countJewels('aAaachfkie', 'anfbhdjdssAAbb')

// function countJewels(jewels, stones) {
//   let m = [];
//   let e = jewels.split('')
//   let s = stones.split('')
//   e.filter(c => {
//     s.map(i => {
//       i === c ? m.push(i) : ''
//     })
//   })
//  let n = new Set();
//  m.forEach(z => n.add(z));
//  console.log(n)
//  } 
