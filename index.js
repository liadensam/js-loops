//We use CYCLES if we want to execute the same command several times.

//We have two basic types of cycles:
//for-cycle - has the exact number of times to execute
//while-loop - executed as long as the condition is true

/*For a while-loop, care must be taken to ensure that its input condition is violated sometime during the run of the loop. Otherwise, the cycle never ends - the program loops (or ends when the computer runs out of memory).*/


//EXAMPLE1:
/*
let i = 0 is called initial state
i < 6 is a condition
i++ is an end condition, the changing factor
*/


// for-cycle, six times writes Javascript to the console
/*
for (let i = 0; i < 6; i++) {
   console.log("Javascript");
}


// while-cycle, six times writes Javascript to the console
let num = 0;
while (num < 6) {
   console.log("Javascript");
   num = num + 1;     // the same as we would write num++
}
*/


//EXAMPLE2:
//writes number from 0 to 20
/*
 let pocet = 0;

 while(pocet <= 20) {

 console.log(pocet);
 pocet = pocet + 1;

 }

 console.log();
*/



//EXAMPLE3:
// writes number from 20 to 1
/*
let count = 20;

while(count > 0) {

console.log(count);
count = count - 1;

}

console.log();
*/




//EXAMPLE4:
//writes 5x elephant
/*
let animal = 1;

while(animal < 6) {

console.log("elephant");
animal = animal + 1;

}

console.log();
*/



//EXAMPLE4:
//you enter a password, if it is not the correct one, it will want you to write it again
/*
let myPswrd = "sunny";
let logIn = prompt("write password");



  while(logIn !== myPswrd) {
  logIn = prompt("wrong password, write your password again");
  }

  console.log("welcome to our website")
*/



//EXAMPLE5:
//the same thing as previous one
/*
 let pswrdInDatabase = "Czech1ta$2002"

 while (prompt("wite password") !== pswrdInDatabase) {
   console.log("wrong password")
 }

 console.log("successfully loged in")
 */




//EXERCISES

/*
const arrayOfPeople = [
  {
    "id": 1,
    "name": "Craggie Mackleden",
    "birthdate": "8/11/1954",
    "children": 0,
    "country": "Turkey"
    , "can_program": true
  },


  {
    "id": 2,
    "name": "Tarrah Gennings",
    "birthdate": "3/10/1972",
    "children": 2,
    "country": "Czech Republic",
    "can_program": true
  },


  {
    "id": 3,
    "name": "Ileane Lebreton",
    "birthdate": "5/10/1993",
    "children": 0,
    "country": "Honduras",
    "can_program": false
  },


  {
    "id": 4,
    "name": "Haily Renfield",
    "birthdate": "3/15/1952",
    "children": 5,
    "country": "China",
    "can_program": false
  },


  {
    "id": 5,
    "name": "Neron Pavlenkov",
    "birthdate": "7/3/2003",
    "children": 2,
    "country": "Russia",
    "can_program": false
  },


  {
    "id": 6,
    "name": "Barbette Fegan",
    "birthdate": "1/20/1988",
    "children": 5,
    "country": "Bangladesh",
    "can_program": true
  },


  {
    "id": 7,
    "name": "Leonardo MacCorkell",
    "birthdate": "4/26/1978",
    "children": 3,
    "country": "Indonesia",
    "can_program": true
  },


  {
    "id": 8,
    "name": "Kanya Leather",
    "birthdate": "5/2/1964",
    "children": 5,
    "country": "Philippines",
    "can_program": false
  },


  {
    "id": 9,
    "name": "Livvyy Crammy",
    "birthdate": "8/12/2004",
    "children": 0,
    "country": "Colombia",
    "can_program": true
  },


  {
    "id": 10,
    "name": "Bondon Hadlee",
    "birthdate": "5/19/1953",
    "children": 5,
    "country": "South Africa",
    "can_program": false
  }
]

*/





/*
Create a Javascript file that, using console.log():
Outputs how many children all people have, in total (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
*/

//just writes amount of children of each object in the array
/*
for (let i = 0; i < arrayOfPeople.length; i++) {
console.log(arrayOfPeople[i].children);
}
*/






//here it returns the total sum of the children of all people in the list
/*
let sum = 0;
for (let i = 0; i < arrayOfPeople.length; i++) {
sum += arrayOfPeople[i].children
}
console.log( "There are " + sum + " children in the list." );
*/








/*Outputs one string per person formatted as such:
<Name>: <Age>*/

//one person all details
/*
console.log(arrayOfPeople[0]);
*/






//all names from the list
/*
for (let i = 0; i < arrayOfPeople.length; i++) {
 console.log(arrayOfPeople[i].name);
}
*/





//all details written in one row for each person, there is probably more elegant way, but this is for the beginning now what I have
/*
for (let i = 0; i < arrayOfPeople.length; i++) {
 console.log(arrayOfPeople[i].id,arrayOfPeople[i].name, arrayOfPeople[i].birthdate, arrayOfPeople[i].children,arrayOfPeople[i].country,arrayOfPeople[i].can_program);
}
*/






/*
Output all properties of all people using for...in
Ex.:
Name: Freddy McCready
Birth Date:  7/1/1987
Children: 3
Country: Australia
Can program: Yes*/


//here I used for...in loop
/*
for (let x in arrayOfPeople) {
  console.log(arrayOfPeople[x]);
}
*/



//here I sued for loop
/*
for (let i = 0; i < arrayOfPeople.length; i++) {
 console.log(arrayOfPeople[i]);
}
*/