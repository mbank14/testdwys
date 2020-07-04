function makeid(length) {
  let pemisah = "-";
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      
      if(i > 0 ){
        result = result + pemisah;
         }
        else{ 
          result;
        }
      for( let j = 0; j <= 3; j++){
      
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

   }
   return result;
}

console.log(makeid(3));
