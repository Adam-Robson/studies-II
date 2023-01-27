const implementStack = () => {

  /*  
    Last In First Out 
    Implement Stack as an abstract data type ( class that has an array property) that exposes:
    push(item), pop(), peek()  
  */ 
  
  
  const peek = (arr, num) => {
  
        typeof arr !== [] ? 'Please provide a valid array' : arr;
  
        typeof num !== Number() ? 'Please provide a valid number' : num;
  
        let peekedAt = (arr & num) ? arr.find(arr[num]) : 'Cannot peek at value ' + arr[num];
  
        return peekedAt;
    }

    
 const pop = (arr) => {
  
  typeof arr !== [] ? 'Please provide a valid array' : arr;
  
  try {
  
    let element;
  
    arr.length !== 0 ? element = arr.slice(-1) : 'There must be at least one element in the array';
  
    return element;
  
  } catch(err) {
  
    err.message = err.message || err
  
  }
  
}

 const push = (arr, value) => {

  typeof arr !== [] ? 'Please provide a valid array' : arr;

  if (arr.join('*separator*') && String(value)) {

    try {

      let both = `${arr}*separator*${value}`;

      typeof value !== true ? 'Please provide a truthy value to perform this operation.' : value;

      let dirtyArray = both.split('*separator*');

      let pushedArray = dirtyArray.map((val) => delete val);

      return pushedArray;

    } catch (err) {

       console.error(err.message + ': ' + err);

      }

    }

  }

}
