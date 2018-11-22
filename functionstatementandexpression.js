var whatDoYouDo = function(job , firstName){
  switch(job){
    case 'teacher':
       return (firstName + 'teacher');

    case 'driver':
       return (firstName + 'driver');

    case 'designer':
      return (firstName + 'designer');

    default:
    return 'sorry';
  }
}
console.log(whatDoYouDo('teacher' , 'vinay'));
