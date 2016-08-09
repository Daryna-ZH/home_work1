function Person() {

}
var x = new Person;

function Male() {

}

function Female() {

}

Male.prototype = Object.create(Person.prototype);
Female.prototype = Object.create(Person.prototype);

// Male.prototype
// 
// 
