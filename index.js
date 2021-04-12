const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers= function(array){
    let first= []
    first.push(array[0],array[1])
    return first;
}

const returnLastTwoDrivers= function(array){
    let last= []
    last.push(array[2],array[3])
    return last;
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    function fareMultiplier(num){
        return fare*num
    }
    return fareMultiplier;
}

const fareDoubler = function(double){
    return createFareMultiplier(double)(2);
}


const fareTripler= function(triple){
    return createFareMultiplier(triple)(3);
}

const selectDifferentDrivers= function(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers);
}