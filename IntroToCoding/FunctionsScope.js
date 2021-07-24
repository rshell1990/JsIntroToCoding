function countString(str, letter){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str.charAt(i)==letter){
      count += 1;
    }
  }
  return count;
}
const string = 'aAbcaaCDXBa'
const letterToCheck = 'a';
const result = countString(string, letterToCheck);
console.log(result)

function pyramid(n) {
  for(let i=1; i<= n; i++){
    let str = ''.repeat(n-i);
    let str2 = '*'. repeat(i)
    console.log(str + str2 + str);
  }
}
pyramid(5);