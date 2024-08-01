

const hours = 15;

let change =  hours >= 12 && hours < 24 ? " PM" : " AM";

let hoursTranslat = hours % 12 ;

hoursTranslat = hoursTranslat ? hoursTranslat : 12;

console.log(hoursTranslat + change);