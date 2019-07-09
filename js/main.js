		var lib = [];
		document.querySelector('#adder').addEventListener('click', addtolib);

		function Book(title, author, pages, status, id) {
		    this.id = id;
		    this.title = title;
		    this.author = author;
		    this.pages = pages;
		    this.status = status;

		    togstat = function(s) {
		    	return  (s == 'Read') ? "Not Read" : "read";
			}
		}

		function addtolib(e) {
		    e.preventDefault();
		    var ttitle = document.querySelector('#titleIn').value;
		    var aauthor = document.querySelector('#authorIn').value;
		    var ppages = document.querySelector('#pagesIn').value;
		    var sstatus = document.querySelector('#redIn').value; 
		   
		    var book = new Book(ttitle, aauthor, ppages, sstatus);
		    lib.push(book);
		    cleardrow(lib); 		    
		    }

		 function cleardrow(lb) {
		 	delros();
		 	lb.forEach(bb => {
		 		addbkro(bb);
		 	});
		 }
	
		 function delros() {
			var tebo = document.querySelector('#dtable');	
		 	while(tebo.rows.length > 0) {
		 		 tebo.deleteRow(0);
		 	}
		 }

		  function dell(bkid) {
		  	var pp = lib.indexOf(this);
		 	lib.splice(pp,1);
		 	cleardrow(lib);		  	
		  }


		 function addbkro(bk) {
				var tebody = document.querySelector('#tb');	
		 	   	var terow = document.createElement('tr');
		 		terow.innerHTML = `
		 			<td>${bk.id}</td>
		 			<td>${bk.title}</td>
		 			<td>${bk.author}</td>
		 			<td>${bk.pages}</td>
		 			<td>${bk.status}</td>
	 	        <td><input type="button" onclick="dell()" value="delete"> </td>
		 		`;
		 	    tebody.append(terow);
		 }

