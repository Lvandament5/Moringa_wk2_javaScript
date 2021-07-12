

function bday_prompt()
{
var year=prompt("Year","")
var month=prompt("Month","")
var day=prompt("Day","")
var bday=new Date(year,month,day)
var today=new Date()
var difference = Math.abs(today-bday);
days = difference/(1000 * 3600 * 24)

console.log(days)
}
bday_prompt()