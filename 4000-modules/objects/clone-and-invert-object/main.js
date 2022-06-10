var student = {
    age: 23,
    name: "Milos",
    surname: "Lazarevic",
    grade: 1,
    currentModule: "4300FrontEnd"
}

function invertObject(oldObject) {
    var newObject = {}; // or var newObject = new Object;    
    

    // Iterates through oldObject(student) and creates new keys with the value of oldObject keys [oldObject[key]] while the = key; sets the value of those new keys to be the name of the old keys.
    for (var key in oldObject) {
        newObject[oldObject[key]] = key;
    }

    return newObject;
}

var invertedStudent = invertObject(student);
console.log(invertedStudent)