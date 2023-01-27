
function changeEnough(change, cost) {

   const quarterQuantity = change.shift();
   const quarterAmount = quarterQuantity * 25

   const dimesQuantity = change.shift();
   const dimesAmount = dimesQuantity * 10

   const nickelsQuantity = change.shift();
   const nickelsAmount = nickelsQuantity * 10

   const penniesAmount = change.shift();
   const totalAmount = penniesAmount + nickelsAmount + dimesAmount + quarterAmount;

   const changeAmount = totalAmount / 100

   if (cost >= changeAmount) {
      console.log(false);
   } else {
      console.log(true);
   }
}

changeEnough(change, cost);