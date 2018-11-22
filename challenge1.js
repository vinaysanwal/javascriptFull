var marksHeight = 20;
var marksWeight = 30;

var johnHeight = 50;
var johnWeight = 60;

markBmi = marksWeight / (marksHeight * marksHeight);
johnBmi = johnWeight / (johnHeight * johnHeight);
  if(markBmi > johnBmi){
    console.log('Markwon');
  }else{
    console.log('johnwon');
  }
