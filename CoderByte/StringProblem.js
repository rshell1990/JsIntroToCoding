function StringChallenge(str, letter){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str.charAt(i)==letter){
      count += 1;
    }
  }
  return count;
}
let string = prompt("Please provide the string to be checked");
const letterXToCheck = 'x';
const letterYToCheck = 'o';
var result = StringChallenge(string, letterXToCheck);
var result2 = StringChallenge(string, letterYToCheck);
if (result = result2){console.log(true)}
else{console.log(false)}