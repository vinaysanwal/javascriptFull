
var names = ['john', 'Mark' , 'Jane'];
var years = new Array(1990, 1969 , 1948);
console.log(names[2]);
console.log(names.length);


   //different data types

   var john = ['John' , 'Smith' , 1990 , 'designer' , false];

   john.push('blue');
   john.unshift('Mr.');
   console.log(john);

   john.pop();
   john.shift();

   console.log(john);


   console.log("index of 1990 is " + john.indexOf(1990));

   var isDesigner = john.indexOf('teacher') === -1 ? 'john is Not a designer' : 'john is a designer';

   console.log(isDesigner);
