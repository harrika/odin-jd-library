  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    
    for (let n in obj){
  		if (typeof obj[n] == 'number') {
        	obj[n] *= 2;
        	//return obj.n;
      }
    }
  
  }
  
multiplyNumeric(menu);
console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

