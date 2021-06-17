// ***** There are 2 tyes of conditional statements in Javascript *****
// if ... else
// Switch ...case

// An example of if .. else logic
// set and assign a variable
// Hour
// if hour is between 6am and 12pm: Good Morning!
// if it is between 12pm and 6pm Good afternoon!
// otherwise: Good evening!

// if (condition) {
//   // if condition is true the statment will be executed
//   statement;
// } else if (anotherCondition) {
//   statement;
// } else {
//   statement;
// }

// here is how it works

let hour = 19;
if (hour >= 6 && hour < 12) {
  console.log('Good Morning!');
}
else if (hour >= 12 &&  hour < 18) {
  console.log('Good Afernoon!')
}
else {
  console.log('Good Evening!')
}

// Here is a case statement logic
// again set a variable
// then we add that to the switch statement
// and then compare values to the switch variable
// add a break statement to jump out of the block so the other statements don't run
// no break needed for the default statment

// let role;
let role = 'guest';
 switch (role) {
   case 'guest':
     console.log('Guest User')
     break;

     case 'moderator':
       console.log('Modrator User')
       break;
        default:
          console.log('Unknown User');
 }


