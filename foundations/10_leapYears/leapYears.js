const leapYears = function(year) {
    //year % 4 === 0 && year % 100 !== 0
    if(year % 4 === 0){
        if(year % 100 === 0 && year % 400 !== 0){
            return "not a leap year"
        }
        else{
            return "leap year"
        }
    }
};

/*Notes: 
The solution takes the leap year categories and assigns each option to a variable which makes for better readability.  
*/

console.log(leapYears(2400))

// Do not edit below this line
module.exports = leapYears;
