function StringChallenge(str) { 
    let storage = '';
    
    for(let i=0; i < str.length; i++){
      let strCode = str.toUpperCase().charCodeAt(i);
    
      if(strCode > 64 && strCode < 91){
          storage += (strCode - 64) + "";
      } else {
        storage += str[i]
      }
    }
    
    return storage;
    
    
    
    }
       
    // keep this function call here 
    console.log(StringChallenge(readline()));