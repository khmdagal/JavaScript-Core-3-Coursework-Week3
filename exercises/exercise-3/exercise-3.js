let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const [...orderList] = order;

// This will be the title of each column
console.log(`QTY \t ITEM \t TOTAL`);
const totalBill = orderList.map(element => {
 
  // this will print out each item quantity and total price based on the quanty for this particular item
  console.log(
    `${element.quantity} \t ${element.itemName} \t\t ${Number(
      element.unitPrice * element.quantity
    ).toFixed(2)}`
  );
  
  // this retunrs the total for each item and then we add together to get the total bill
  return element.unitPrice * element.quantity
}).reduce((a, b) => a + b)
console.log(`Total: ${totalBill} 
Enjoy your meal🥗`)

// couldn't aling the Sausage McMuffin price with the other pricess