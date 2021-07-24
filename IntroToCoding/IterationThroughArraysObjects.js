const userNames = ['IluvShoes44', 'kramer5B','iamMaDDateverythingiwilltrollyoursite4EVER!!!99', 'd', 'jerry5A']

for(let i = 0; i < userNames.length; i++) {
  if(userNames[i].length > 12){console.log("Name too long Must be less then 12 characters.")}
  else if(userNames[i].length < 2){console.log("Name too short! Must be more than two characters.")}
  else{console.log("Thank you, your user name has been set to: "+userNames[i])}
}

//Sesson 7 Did not have an object

const users = [
  {
    'first_name': 'Homer',
    'last_name' : 'Simpson',
    'dob': '03/19/195-', 
    'married': true, 
  }, 
  {
    'first_name': 'Marge',
    'last_name': 'Simpson',
    'dob': '05/12/56',
    'married': true,
  }, 
  {
    'first_name': 'Lisa',
    'last_name': 'Simpson',
    'dob': '04/19/87',
    'married': false,
  }, 
]
for (let j = 0; users.length; j++){
  if (users[j].married === true){console.log(users[j].first_name)}
}