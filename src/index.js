
module.exports = function check(bracketsStr, config) {
   var result = true;
   var openElems = [];
   var closeElems = [];
   var openIndex;
   var closeIndex;


   for (var a = 0; a < config.length; a++) {
     openElems.push(config[a][0]);
     closeElems.push(config[a][1]);
   }

   var bracketsArr = bracketsStr.split('');
   var j;

   function findClose(openBracket){

     // console.log(openBracket);
     for (j; j < bracketsArr.length; j++) {
         if(closeElems.indexOf(bracketsArr[j]) !== -1 &&
         openElems.indexOf(openBracket) == closeElems.indexOf(bracketsArr[j])){
           delete bracketsArr[bracketsArr.indexOf(openBracket)];
           // console.log(bracketsArr);
           delete bracketsArr[j];
           // console.log(bracketsArr);
           break;
         }
         else if(openElems.indexOf(bracketsArr[j]) !== -1){
           j = j + 1;
           findClose(bracketsArr[j-1]);
         }
         else if(closeElems.indexOf(bracketsArr[j]) !== -1 &&
         openElems.indexOf(openBracket) != closeElems.indexOf(bracketsArr[j])){
           result = false;
           break;
         }
         else{
           result = false;
           break;
         }
         }
   }


  outer:for (var i = 0; i < bracketsArr.length; i++){
       // openIndex = openElems.indexOf(bracketsArr[i]);
       // closeIndex = closeElems.indexOf(bracketsArr[i]);

       if(openElems.indexOf(bracketsArr[i]) !== -1){
         // console.log(bracketsArr[i]);
         j = i + 1;
         findClose(bracketsArr[i]);
         // for (var j = i+1; j < bracketsArr.length; j++) {
             // if(closeElems.indexOf(bracketsArr[j]) !== -1 &&
             // openElems.indexOf(bracketsArr[i]) == closeElems.indexOf(bracketsArr[j])){
             //   delete bracketsArr[i];
             //   delete bracketsArr[j];
             //   break;
             // }

             // else if(closeElems.indexOf(bracketsArr[j]) !== -1 &&
             // openIndex != closeElems.indexOf(bracketsArr[j])){
             //   result = false;
             //   break outer;
             // }

         //     else if(openElems.indexOf(bracketsArr[j]) !== -1 &&
         //     openElems.indexOf(bracketsArr[j]) != openIndex){
         //       for (var k = j+1; k < bracketsArr.length; k++) {
         //         if(closeElems.indexOf(bracketsArr[k]) !== -1 && openElems.indexOf(bracketsArr[j]) != closeElems.indexOf(bracketsArr[k])){
         //           result = false;
         //           break outer;
         //         }
         //         else if(closeElems.indexOf(bracketsArr[k]) !== -1 && openElems.indexOf(bracketsArr[j]) == closeElems.indexOf(bracketsArr[k])){
         //           delete bracketsArr[j];
         //           delete bracketsArr[k];
         //           break;
         //         }
         //
         //     }
         //
         // }
       }

       else if(closeElems.indexOf(bracketsArr[i]) !== -1){
         // console.log(bracketsArr[i]);
         result = false;
         return result;
         break;
       }
       else if(bracketsArr[i] == undefined){
         continue;
       }
       else {
         result = false;
         break outer;
       }
     }

     for (var i = 0; i < bracketsArr.length; i++) {
       if(bracketsArr[i] != undefined){
         result = false;
         break;
       }
       else{
         result = true;
       }
     }
     return result;

   }


// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));
