
module.exports = function check(bracketsStr, config) {
   var result;
   var openElems = [];
   var closeElems = [];
   var openIndex;
   var closeIndex;

   for (var i = 0; i < config.length; i++) {
     openElems.push(config[i][0]);
     closeElems.push(config[i][1]);
   }

   var bracketsArr = bracketsStr.split('');


  outer:for (var i = 0; i < bracketsArr.length; i++){
       openIndex = openElems.indexOf(bracketsArr[i]);
       closeIndex = closeElems.indexOf(bracketsArr[i]);

       if(openIndex !== -1){
         for (var j = i+1; j < bracketsArr.length; j++) {
             if(closeElems.indexOf(bracketsArr[j]) !== -1 &&
             openIndex == closeElems.indexOf(bracketsArr[j])){
               delete bracketsArr[i];
               delete bracketsArr[j];
               break;
             }

             else if(closeElems.indexOf(bracketsArr[j]) !== -1 &&
             openIndex != closeElems.indexOf(bracketsArr[j])){
               result = false;
               break outer;
             }

             else if(openElems.indexOf(bracketsArr[j]) !== -1 &&
             openElems.indexOf(bracketsArr[j]) != openIndex){
               for (var k = j+1; i < bracketsArr.length; k++) {
                 if(closeElems.indexOf(bracketsArr[k]) !== -1 && openElems.indexOf(bracketsArr[j]) != closeElems.indexOf(bracketsArr[k])){
                   result = false;
                   break outer;
                 }
                 else if(closeElems.indexOf(bracketsArr[k]) !== -1 && openElems.indexOf(bracketsArr[j]) == closeElems.indexOf(bracketsArr[k])){
                   delete bracketsArr[j];
                   delete bracketsArr[k];
                   break;
                 }

             }

         }
       }
       }
       else if(closeIndex !== -1){
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

// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']] ));
