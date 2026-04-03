let person = {
    firstName: `Dyames`,
    lastName: `Valmeo`,
    age: 30,
    hobbies: [`Coding`, `Eating`, `Playing Online Games`],
    pets: {
        1: {
            name: `blackwell`,
            type: `Dog`,
            breed: `Shihtzu`,
        },
        2: {
            name: `Tell`,
            type: `Cat`,
            breed:`Siamese`
        }
    }
}

// //JASON.stringify

// // ==============Sample Syntax ==============
// let strPerson = JSON.stringify(person);
// console.log(strPerson);


// JASON.parsing 

// ==============Sample Syntax ==============
let strPerson = `{"firstName" : "Cait","lastName":"Valmeo", "age":7}`
let person2 = JSON.parse(strPerson);
console.log(person2);




/*
// ============ READ ============

// Dot Notation
person.firstName                // "Dyames"
person.age                      // 30

// Bracket Notation
person["firstName"]             // "Dyames"
person["age"]                   // 30

// Array Access
person.hobbies[0]               // "Coding"
person.hobbies[1]               // "Eating"
person.hobbies[2]               // "Playing Online Games"

// Nested Object (bracket because keys are numbers)
person.pets[1].name             // "blackwell"
person.pets[1].type             // "Dog"
person.pets[2].name             // "Tell"
person.pets[2].breed            // "Siamese"

// Optional Chaining (returns undefined instead of error)
person?.firstName               // "Dyames"
person?.pets?.[1]?.name         // "blackwell"
person?.pets?.[3]?.name         // undefined (no error)

// Destructuring
let { firstName, lastName } = person
firstName                       // "Dyames"

let [hobby1, hobby2] = person.hobbies
hobby1                          // "Coding"



// ============ WRITE ============

// Update existing property
person.firstName = "Jason"              // firstName is now "Jason"
person["lastName"] = "Borne"            // lastName is now "Borne"
person.age = 25                         // age is now 25

// Add new property
person.email = "jason@email.com"        // adds new email property
person["phone"] = "123-456-7890"        // adds new phone property

// Update array item
person.hobbies[0] = "Swimming"          // replaces "Coding" with "Swimming"

// Add new item to array
person.hobbies.push("Reading")          // adds "Reading" at the end
person.hobbies[3] = "Drawing"           // adds at index 3

// Update nested object property
person.pets[1].name = "Blacky"          // renames pet 1 to "Blacky"
person.pets[2].breed = "Persian"        // changes pet 2 breed

// Add new nested object
person.pets[3] = {                      // adds a new pet
    name: "Goldie",
    type: "Fish",
    breed: "Goldfish"
}

// Add a brand new nested object property
person.address = {                      // adds new address object
    city: "Manila",
    country: "Philippines"
}

// Delete a property
delete person.age                       // removes age
delete person.pets[1]                   // removes pet 1
delete person.address.city             // removes city from address

*/