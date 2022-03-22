var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };



const keys = Object.keys(student); // Contains the keys

console.log(keys) // Returns array of keys


// Returns keys 1 by 1
keys.forEach((key, index) => {
    console.log(`${key}`);
});

// Returns keys 1 by 1
for (var key in student) {
    console.log(key)
}