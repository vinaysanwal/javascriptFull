//object and Properties ...


var john = {
  firstName: 'Vinay',
  lastName: 'Sanwal',
  birthArray: 1995,
  family:['xyz' , 'abc' , 'qrs'],
  job: 'developer',
  isMarried: false
}
console.log(john.firstName);
console.log(john.lastName);
console.log(john.birthArray);
console.log(john['job']);
var x = 'birthArray';
console.log(john[x]);

  var sanwal = new Object();
  sanwal.firstName = 'vinay';
  sanwal.birthYear = 1969;
  sanwal['lastName'] = 'sanwal';

  console.log(sanwal);
