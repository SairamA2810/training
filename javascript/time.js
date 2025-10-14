let date=new Date()
let departureDate=new Date("2025-08-31")
// let diff=(date.getTime()-departureDate.getTime())/(1000*60*60*24)
console.log(Math.ceil((date-departureDate)/(1000*60*60*24)))

let str="100.999"
console.log(parseFloat(str))