function calculateAge(birthYear){
  return 2018 - birthYear;
}

var ageVinay = calculateAge(1995);
console.log(ageVinay);


function yearsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;

  if(retirement > 0){
    console.log(firstName + retirement);
  }else {
    console.log('already gone');
  }


}
yearsUntilRetirement(1990 , 'vinay');
