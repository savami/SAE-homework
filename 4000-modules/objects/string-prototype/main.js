var someString = "Sava"

String.prototype.stringSubset = function() {
    var subsets = [];
    // console.log(this)

    for (var i = 0; i < this.length; i++) {
        for (var j = i + 1; j < this.length + 1; j++) {
            subsets.push(this.slice(i,j));
        }
    }

    return subsets;
}

console.log(someString.stringSubset());