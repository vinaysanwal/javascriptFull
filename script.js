var firstName = 'Vinay';
var lastName = 'sanwal';
console.log(firstName);


  //variable mutation and coerction

  var firstName = 'sanwal';
  var age = 28;

  console.log(firstName + '' + age); //coerction..

  var job , isMarried ;
  job = 'teacher';
  isMarried = false;

  console.log(firstName + age + job);


   //variable mutation

   age = 'twenty five';
   job = 'driver';

   alert(age + job);


  secretKey  = prompt('type your secret key?');

  console.log(secretKey);


  //ternary operator....

  var firstName = 'john';
  var age = 16;

  age >= 16 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drinks Juice.')


   //switch statements .....

   var job = 'teacher';

   switch(job){

   case 'teacher':
   console.log(firstName + ' teacher kids how to code');
   break;

   case 'driver':
   console.log(firstName + 'drivers an uber');
   break;

   case 'designer':
   console.log(firstName + 'designs Cool Websites');
   break;

   default:
   console.log('soory');

}
