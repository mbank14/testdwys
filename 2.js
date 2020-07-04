
function cekData(dataKey, parag){

    // return (parag.indexOf(dataKey) > -1);
  
    for(let i of dataKey){
      if (i.includes(parag) == true){
        console.log(i, "ada");
        }else{
          console.log(i, "tidak ada")
        }
      }
}
cekData();
