
//https://github.com/saifur01/Assignment03

// kilometerToMeter

function kilometerToMeter(kilometer){
    var getMeter = kilometer * 1000;
    return getMeter;
}
var resultMeter = kilometerToMeter(2);
// console Output
console.log(resultMeter);


//  budgetCalculator

function budgetCalculator (x, y, z){
    var watch = 50;
    var phone = 100;
  var laptop = 500;
   var sum = 0;
   if((x >= 0) && (y >= 0) && (z >= 0)){
       sum = x * watch
       sum = sum +(y * phone);
       sum = sum +(y * laptop);
   } else if ((x < 0) || (y < 0) || (z < 0)){
    return "input the positive umber"
   }
   return sum
}
var result = budgetCalculator(1, 5, 6 )
// console Output
console.log(result);


// hotelCost

function hotelCost(day){
    var totalCost = 0;
    if(day <= 10){
        totalCost = day * 100;
    } else if(day <= 20){
        var firstTenDay = 10 * 100;
        var remainingDay = day - 10;
        var secondTenDay = remainingDay * 80;
        totalCost = firstTenDay + secondTenDay;
    } else{ 
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remainingDay = day - 20;
        var thirdTenDay = remainingDay * 50;
        totalCost = firstTenDay + secondTenDay + thirdTenDay;
        

    }
    return totalCost
}
var result = hotelCost(2);
// console Output
console.log(result);


// megaFriend

  function megaFriend(friendName){
      var biggestName = '';
      for(var i= 0; i < friendName.length; i++){
     
        if (biggestName.length < friendName [i].length){
            biggestName = friendName [i];
        }

      }
      return  biggestName;
  }
        // My fovorite Friend Name
  var getmegaFriend = megaFriend (['Saifur', 'Misba', 'Mitu', 'Sajal']);
  // console Output
  console.log(getmegaFriend);