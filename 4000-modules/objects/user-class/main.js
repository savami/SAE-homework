function User(firstName, lastName, age, role, active) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.role = role;
    this.active = active;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
    
    this.printInfo = function() {
        console.log(this.fullName());
        console.log(this.age);
        console.log(this.role);
        console.log(this.active);
    }
}

// const sava = new User('Sava', 'Miljkovic', 27, 1, true);
// sava.printInfo()


var newUserObjString = '{"role":15,"name":"Pera","last":"Liht","godine":33,"active":false}'
var newUserObj = JSON.parse(newUserObjString) // Turns it from string to an object
console.log(newUserObj)

const newUser = new User
(
    newUserObj.name,
    newUserObj.last,
    newUserObj.godine,
    newUserObj.role,
    newUserObj.active
)

console.log(newUser.fullName());