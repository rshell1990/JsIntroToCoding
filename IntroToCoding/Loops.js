// Write a program that prints the numbers 1 - 50. If the number is even print the word 'EVEN!' next to it. If the number is odd print the word 'ODD!' next to it.
let i = 1

while (i < 51){
  console.log(i)
  if(i % 2 === 0){ console.log("Even")
  i++
  }
  else{console.log("Odd")
  i++
  }
}
