var CurrentMilii = new Date()
var Mili = new Date(prompt("Enter your Birth date: mm/dd/yy"))
var totalMili = (CurrentMilii.getTime() - Mili.getTime())
var totalMilliseconds = 1000*60*60*24*31
var totalYear = 1000*60*60*24*31*12
var totalHours = 1000*60*60
var totalMinutes = 1000*60
var totalSeconds = 1000
console.log("Years",Math.floor(totalMili/totalYear))
console.log("Months",Math.floor(totalMili / totalMilliseconds))
console.log("Hours",Math.floor(totalMili/(totalHours)))
console.log("Minutes",Math.floor(totalMili/(totalMinutes)))
console.log("Seconds",Math.floor(totalMili/(totalSeconds)))

document.write("Calculator to Convert age, hours, minuter, seconds<br>")
document.write("You Spent ",Math.floor(totalMili/totalYear),"Years <br>")
document.write("You Spent ",Math.floor(totalMili / totalMilliseconds),"Months <br>")
document.write("You Spent ",Math.floor(totalMili/(totalHours)),"Hours <br>")
document.write("You Spent ",Math.floor(totalMili/(totalMinutes)),"Minutes <br>")
document.write("You Spent ",Math.floor(totalMili/(totalSeconds)),"Seconds <br>")