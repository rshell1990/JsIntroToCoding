// Write a program that prints a message to the screen based on a users age and country.

// Feel free to change these variables or create new ones so you can test all cases.

const age = 22

const country = 'France'

// if the user is younger than 16 print "You're not old enough to do anything yet."
if(age<16){console.log("You're not old enough to do anything yet.")}
// if the user is at least 16 but not yet 18 print "Be careful driving."
else if(age>=16 && age < 18){console.log("Be careful driving.")}
// if the user is 18 but not yet 21 and the user lives in the USA print "Go Vote!"
else if(age>=18 && age < 21 && country == 'USA'){console.log("Go Vote!")}
// if the user is at least 18 but younger than 21 and lives outside of the US print "You can probably have some wine."
else if(age>=18 && age < 21 && country != 'USA'){console.log("You can probably have some wine.")}
// In all other cases print "You're old enough to figure it out for yourself."
else{console.log("You're old enough to figure it out for yourself.")}