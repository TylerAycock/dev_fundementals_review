// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to create object literals.

// 1.1
//  Create an object literal that has 5 properties.
//  Each one of these properties should contain a
//  different types of primitive values. (Primitive
//  values are also know as "simple data types.")

let obj = {
  name: "Tyler",
  age: 30,
  isEmployed: false,
  height: null,
  favoriteColor: undefined,
};

// 1.2
//  Create an object literal that has both primitive values
//  and non-primitive values.

let obj2 = {
  name: "Carissa",
  age: 29,
  luckyNumbers: [11, 23, 69, 666],
  address: {
    street: "123 generic st",
    city: "fake city",
    state: "Murica",
  },
  isEmployed: true,
};

// *** Problem 2 ***
//  Students should be able to access properties of
//  objects in various ways.

console.log(obj2["address"].city);
console.log(obj2.luckyNumbers[2]);

// 2.1
//  Given an object named person1, get the 'age'
//  property with dot notation and save it to a variable.

const person1 = {
  name: "Joe",
  age: 80,
};

let personOneAge = person1.age;
console.log(personOneAge);

// 2.2
//  Given an object named person2, get the 'name'
//  property with bracket notation and save it to a variable

const person2 = {
  name: "Donald",
  age: 76,
};

let personName = person2["name"];
console.log(personName);

// 2.3
//  Given an object named person3, use destructuring to create
//  a variable called 'name' that contains person3's 'name' property.

const person3 = {
  name: "Barak",
  age: 61,
};

let { name: hisName } = person3;
console.log(hisName);

// 2.4
//  Given an object named person4, use destructuring to create
//  variables called 'name' and 'years', which respectively
//  contain person4's 'name' and 'age' properties.
//  Note: this should be done in one line with destructuring.

const person4 = {
  name: "George",
  age: 76,
};

let { name, age } = person4;

// 2.5
//  The variable person5 contains an object, which in turn
//  contains objects and arrays that may contain more objects
//  and arrays (this is what is referred to as a "nested data
//  structure"). Retrieve the following out of the person5 object
//  and save them as a variable:

// 2.5a
//  the model of person5's black vehicle,

const person5 = {
  name: "Dominic",
  age: 35,
  possessionCategories: [
    {
      category: "furniture",
      list: [
        {
          name: "bench",
          age: 40,
          color: "brown",
        },
        {
          name: "couch",
          age: 2,
          color: "red",
        },
      ],
    },
    {
      category: "vehicles",
      list: [
        {
          make: "Mazda",
          model: "RX-7",
          year: 1993,
          color: "red",
        },
        {
          make: "Dodge",
          model: "Charger R/T",
          year: 1970,
          color: "black",
        },
        {
          make: "Toyota",
          model: "Corolla",
          year: 2008,
          color: "blue",
        },
      ],
    },
  ],
  hasOutstandingWarrants: false,
  siblings: ["Jakob", "Mia"],
};

let findMake = (person) => {
  for (let category of person.possessionCategories) {
    if (category.category == "vehicles") {
      for (let vehicel of category.list) {
        if (vehicel.color == "black") {
          return vehicel.model;
        }
      }
    }
  }
};

// console.log(findMake(person5));

// 2.5b
//  person5's second-listed sibling,

let youngersibling = person5["siblings"][1];

// 2.5c
//  the color of person5's 40-year-old furniture,

let furnitureColor = (person) => {
  for (let category of person.possessionCategories) {
    if (category.category == "furniture") {
      for (let furniture of category.list) {
        if (furniture.age == 40) {
          return furniture.color;
        }
      }
    }
  }
  return `They don't own a couch that old`;
};

// console.log(furnitureColor(person5));

// 2.5d
//  whether or not person5 has any outstanding warrants,

let wanted = person5.hasOutstandingWarrants;
// console.log(wanted)

// 2.5e
//  and a list (an array) of all of person5's vehicles.

let carsOwned = (person) => {
  let cars = [];
  for (category of person.possessionCategories) {
    if (category.category == "vehicles") {
      category.list.map((carObj) => {
        let { make, model } = carObj;
        cars.push(`${make} ${model}`);
      });
    }
  }
  return cars;
};

// console.log(carsOwned(person5));

// *** Problem 3 ***
//  Students should be able to modify properties of
//  objects. We will be using the person5 variable from
//  problem 2.5 for this section.

// 3.1a
//  Increment the age of person5 by one year.
//  Use the ++ operator to do this.

let increaseAge = (person) => {
  person.age++;
};

increaseAge(person5);

// 3.1b
//  Increment the age of person5 by another year.
//  This time, however, assign the age property
//  to be itself plus one (use the = operator
//  rather than using the ++ operator).

let additionalAge = (person) => {
  person.age = person.age + 1;
};

additionalAge(person5);

// console.log(person5)

// 3.1c
//  Make it so that person5 has an outstanding warrant.

let isWanted = (person) => {
  if (person.hasOutstandingWarrants == true) {
    console.log("This person is already wanted by the law");
  } else {
    person.hasOutstandingWarrants = true;
    console.log(`This person is NOW WANTED`);
  }
};

// isWanted(person5);

// 3.1d
//  Give person5 another sibling named 'Hecktor'.

let newSibling = "Hecktor";

let addSibling = (person, baby) => {
  if (person.siblings.includes(baby)) {
    console.log(`${baby} is already a part of the family tree`);
  } else {
    person.siblings = [...person.siblings, baby];
    console.log(person.siblings);
  }
};

addSibling(person5, newSibling);

// 3.1e
//  Change person5's last-listed car to have the color
//  purple.

let colorChange = (person, color) => {
  for (category of person.possessionCategories) {
    if (category.category == "vehicles") {
      let car = category.list[category.list.length - 1];
      car.color = color;
      console.log(`Yo we pimped out your ${car.make}...we made it ${color}!`);
    }
  }
};

colorChange(person5, "purple");

// 3.1f
//  Remove the "list" property from the first object of
//  person5's possessionCategories.

let removeList = (person) => {
  delete person.possessionCategories[0];
  console.log(person.possessionCategories);
};
removeList(person5);
