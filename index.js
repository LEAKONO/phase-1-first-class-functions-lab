const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0,2);
}

const returnLastTwoDrivers=function (drivers){
    return drivers.slice(2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(someFare) {
    return function(num2) {
      return someFare * num2;
    }
  }
  
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0, 2);
    } else if (func === returnLastTwoDrivers) {
        return arrayOfDrivers.slice(-2);
    }
}