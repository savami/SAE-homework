var studentArray = [];
var veljko = new student('Veljko', 4400, 1);
var harry = new student('Harry', 4400, 1);
var mihailo = new student('Mihailo', 4400, 1);
var yongxin = new student('Yongxin', 4400, 1);


function student(name, modules, year) {
    this.name = name;
    this.modules = modules;
    this.year = year;
    this.printInfo = function () {
        console.log(this.name);
        console.log(this.modules);
        console.log(this.year);
    }

    this.pushToArray = function() {
        studentArray.push(this)
    }
    this.pushToArray();
}

veljko.printInfo();





// console.log("Name: " + veljko.name);
// console.log("Module: " + veljko.module);
// console.log("Year: " + veljko.year);

// console.log(veljko)
// console.log(harry)
// console.log(mihailo)
// console.log(yongxin)