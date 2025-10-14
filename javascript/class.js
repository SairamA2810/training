// class Product{
//     constructor(name,price,type){
//         this.name=name;
//         this.price=price;
//         this.type=type;
//     }
//     displayProductDetails(){
//         console.log(this.name,this.price,this.type);
//     }
// }

// //create a new object for product class
// let product1=new Product("Laptop\n",68000+"\n","Hp");
// product1.displayProductDetails()


//to know to get today's date

// let date=new Date()
// console.log(date)
// console.log(date.getDate())
// console.log(date.getDay())
// date.setDate(date.getDay()+1)

// console.log(date.toLocaleDateString())

// // if(date.getDay()+1===2){
// //     console.log("MONDAY")
// // }

function dateValidate(date){
    let date1=new Date(date);
    // return date1.toISOString().split('T')[0]===date;
    // return date1.toLocaleDateString();
    // return [!isNaN(date1.getTime()),date1]
    return date1.toISOString().split('T')
}
console.log(dateValidate("30-sep-2020"));

// let date=new Date()
// // console.log(date)
// let day=date.getDate()+30
// date.setDate(day)
// console.log(date.toLocaleDateString())