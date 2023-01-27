
# Study - Day 2

Day two of the challenges involves data and continuing improve the approach to data, data structures, manipulating the data and what the effect of scale is on a database, and our process in the context of the fundamental principles of Node and JavaScript.

## Stacks

Stacks are first-in, last-out data structures.

Think of them like a stack of rocks, you can only add a rock on top, or take off the top rock.

Optionally, you can also "peek" at what the top rock is.

### Challenge

Implement Stack as an abstract data type ( a class that has an array property) that exposes:
  
+ push(item)
+ pop () returns item
+ peek() returns item

Think back to Big for arrays when you decide where to put the items in the backing data store array

TestCases:

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop ()) // 'lizard'
console.log(stack.peek()) // 'goose'
consol.log(stack.pop()) //'goose'
stack.push('llama')
console.log(stack.pop ('lizard')); // 'llama'
console.log(stack.peek()) // 'fox'
consol.log(stack.pop()) //'fox'
console.log(stack.pop()) // 'null';
