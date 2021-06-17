// to repeat an action many times we implement loops
// We have many loops 
// For loops..this takes 3 statements condition comparison  incrementor
// While loops
// Do ... while
// for ... in 
// for ... of

// Below is a For loop
// notice the variable is part of the loop and in the scope of the loop
for (let i = 0; i < 5; i++) {
  console.log('Hello World', i);
}
// adding an if statement below

for (let i = 0; i < 15; i++) {
  if(i % 2 !== 0)console.log(i);
}

//  we can also go down

for (let i = 10; i >= 1; i--) {
  console.log("Hello World", i);
}


// Below is a while loop
// Notice the variable is declared outside of th eloop and is not in its scope
// this has the same set-up variable condition and incrementor

// let i = 0;(variable)
// while (condition)
// i++

let i = 0;
while (i <= 7) {
  if (i % 2 !==0)
  console.log(i);
  i++;
}