/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var quarter = 0.25;
var dime = 0.10;
var nickle = 0.05;
var penny = 0.01;

// var dollarAmount = prompt("Enter an amount of money");
// var quarterNum = Math.floor(dollarAmount / quarter);
// dollarAmount = (dollarAmount % quarter).toFixed(2); 
// var dimeNum = Math.floor(dollarAmount / dime);
// dollarAmount = (dollarAmount % dime).toFixed(2);
// var nickelNum = Math.floor(dollarAmount / nickle);
// dollarAmount = (dollarAmount % nickle).toFixed(2);
// var pennyNum = Math.floor(dollarAmount / penny);
// console.log("there are " + quarterNum + " quarters, " + dimeNum + " dimes, " + nickelNum + " nickels " + pennyNum + " pennies");
// //  " + dimes + " dimes, " + nickels + " nickels");

function quartersFunc(dollarAmount) {
  let Qs = Math.floor(dollarAmount / quarter);
  return Qs;
}

// WHY WONT THIS WORK???

// function dimesFunc(dollarAmount) {
//   dollarAmount = (dollarAmount % quarter).toFixed(2);
//   let Ds = Math.floor(dollarAmount / dime);
//   return Ds;
// }


function coinCounter (dollarAmount) {
    // Initialize a JavaScript object to hold the coins

    var coinPurse = {};
    
    coinPurse.quarters = quartersFunc(dollarAmount);
    // coinPurse.quarters = Math.floor(dollarAmount / quarter);
    dollarAmount = (dollarAmount % quarter).toFixed(2);
    coinPurse.dimes= Math.floor(dollarAmount / dime);
    dollarAmount = (dollarAmount % dime).toFixed(2);
    coinPurse.nickels = Math.floor(dollarAmount / nickle);
    dollarAmount = (dollarAmount % nickle).toFixed(2);
    coinPurse.pennies = Math.floor(dollarAmount / penny);

  
    return coinPurse;
  }
  
  var coins = coinCounter()

  