var a = 10;
console.log(a);
var s1 = {
    sNo: 2,
    name: "sai",
    Address: {
        city: "ap",
        pincode: 90
    }
};
console.log(s1);
var id;
id = 10;
id = "sairam";
id = true;
console.log(id);
var e1 = {
    name: "Sairam",
    age: 22,
    cname: "CTS",
    salary: 30000,
    place: "chennai"
};
console.log(e1);
//functions
function test(a) {
    a();
}
test(function () {
    console.log("hello");
});
//tradition version
// in this we need to declare instance variables and we need to intialize them
var Student9 = /** @class */ (function () {
    function Student9(name, age) {
        this.name = name;
        this.age = age;
    }
    Student9.prototype.getDetail = function () {
        return [this.name, this.age];
    };
    return Student9;
}());
var p = new Student9("saoi", 22);
console.log(p);
// to over come the above problem we will use typescript declartion,installation will take in one one line unlike traditional 4 lines.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.company = "cts";
    }
    return Person;
}());
getDetails();
{
    return [this.name, this.age];
}
var p2 = new Person('sai', 20);
console.log(p2);
