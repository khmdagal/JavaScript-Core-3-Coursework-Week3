let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];


//----------TASK 1 ----------
const gryffindorSchool = hogwarts.filter(
  (element) => element.house === "Gryffindor"
);

const [...person] = gryffindorSchool;
 console.log(`Students and Teacher from "Gryffindor" School are as following`);
for (let i = 0; i < person.length; i++){
  console.log(`${person[i].firstName} ${person[i].lastName}`);
}


/*
function getFnamesLnames(arr) {
  console.log(`Students and Teacher from "Gryffindor" School are as following`);
  arr.forEach((element) => {
    if (element.house === "Gryffindor") {
      console.log(`${element.firstName} ${element.lastName}`);
    }
  });
}

getFnamesLnames(hogwarts);
*/



//----------TASK 2 ----------
const teacherWithPets = hogwarts.filter(
  (element) => element.occupation === "Teacher" && element.pet !== null
);


const [...whoHasPet] = teacherWithPets;

for (let i = 0; i < whoHasPet.length; i++) {
  console.log(`The teacher that has a pet is  ${whoHasPet[i].firstName} ${whoHasPet[i].lastName}`
  );
}



/*
function getTeacherWithPets(arr) {
  arr.forEach((element) => {
    if (element.occupation === "Teacher" && element.pet !== null) {
      console.log(
        `The teacher that has a pet is ${element.firstName} ${element.lastName}`
      );
    }
  });
}
getTeacherWithPets(hogwarts);
*/
