var angel = new fish('Angel', true);
var mandarin = new fish('Mandarin', false);
var cat = new fish('Cat', false);
var surgeon = new fish('Surgeon', true);


function fish(species, bool) {
    this.species = species;
    this.bool = bool;
    this.printInfo = function() {
        if (this.bool === true) {
            console.log(this.species + " Fish")
        } else {
            console.log(this.species + "fish")
        }
    }
    this.printInfo();
}


