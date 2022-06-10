var user = { 
    "firstName": "Petronije",
    "lastName": "Jovaničević",
    "fullName": function() {
            return this.firstName + " " + this.lastName;
        },
    "age": 38,
    "role": 3,
    "active": false 
};

const keys = Object.keys(user);
console.log(keys)

for (var key in user) {
    console.log(key)
}

// Not sure if this was according to assignment "List the properties of JavaScript object"