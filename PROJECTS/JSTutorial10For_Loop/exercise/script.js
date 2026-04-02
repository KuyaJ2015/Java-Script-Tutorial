 // Create an array of names then search a name using for loop on the array.

let persons = ["Dyames", "Mhean", "Cait", "Matt", "Cathryn", "Cavin"];

let found = false; // flag to check if the name is found

// loop through the array
for (let i = 0; i < persons.length; i++) {
    
    // check if current element matches the name we're looking for
    if (persons[i] === "Math") {
        alert(`Found ${persons[i]}`); // show the found name
        found = true; // mark as found
        break; // stop the loop
    }
}

// if name was not found after looping
if (!found) {
    alert("Not Found");
}