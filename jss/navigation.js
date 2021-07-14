let text = "";

function getWeekday (year,month,day,sex){
 		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const fnames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    const mnames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let year2=year.toString()
let month2 =  month-1
let cc=year2.slice(0,2)
let yy=year2.slice(2,4)

let weekday=Math.round(( 
(cc/4) -2*cc-1 + 
(5*yy/4) + 
(26*(month2+1)/10) + 
day 
)%7)
 
console.log(cc)
console.log(yy)
console.log(day)
console.log(month2)
console.log(sex)
console.log(weekday)

let weekdayname= days[parseInt(weekday)];
let fname = fnames[parseInt(weekday)]
let mname = mnames[parseInt(weekday)];
console.log(weekdayname)
if (sex == "Y") {
    var akanname= fname;
} else {
    var akanname= mname
}
console.log(akanname)
text += "You were born on "+weekdayname + " and your Akan name is " +akanname +"!"
}
getWeekday(1983,05,05,"Y")
document.getElementById("demo").innerHTML = text;

