// object and methods .....


var john = {
  firstName: 'Vinay',
  lastName: 'Sanwal',
  birthYear: 1995,
  family:['xyz' , 'abc' , 'qrs'],
  job: 'developer',
  isMarried: false,
  calcAge: function(){
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
