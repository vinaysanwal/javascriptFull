var johnScore = (89 + 120 + 103)/3;
var mikeScore = (116 + 94 + 123)/3;
var maryScore = (97 + 134 + 105)/3;

console.log(johnScore);
console.log(mikeScore);
console.log(maryScore);

   if (johnScore>mikeScore && johnScore >maryScore){
     console.log("John Team Won");
   }else if (mikeScore > johnScore && mikeScore > maryScore){
     console.log('Mike Won');
   }else if(maryScore > johnScore && mikeScore < maryScore){
    console.log('Mary Won');
   }
   else if (johnScore == mikeScore || johnscore == maryScore || maryScore == mikeScore){
     console.log('Draw Case');
   }else {
     console.log('There might be a error');
   }
