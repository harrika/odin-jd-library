		var lib = [];
		iid= 0
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
		    iid += 1;		   
		    var book = new Book(ttitle, aauthor, ppages, sstatus, iid);
		    lib.push(book);
		    cleardrow(lib); 		    
		    }

		 //Adds book rows to DOM  after clearing
		 function cleardrow(lb) {
		 	delros();
		 	lb.forEach(bb => {
		 		addbkro(bb);
		 	});
		 }

		 //clears rows from table DOM	
		 function delros() {
			var tebo = document.querySelector('#dtable');	
		 	while(tebo.rows.length > 0) {
		 		 tebo.deleteRow(0);
		 	}
		 }

		  //removes a book fro hte library
		  function dell() {
		  	var pp = lib.indexOf(this);	
		 	lib.splice(pp,1);
		 	cleardrow(lib);		  	
		  }

		  //togling the book status
		  function steto() {
		  	alert(this.iid);
		  	// dd = this.iid;
		  	// const dabuk = lib.find(book => book['iid'] === 1);
		  	// console.log(dabuk.iid);	


		  	let debuk = iid => {
		  	  return iid == 1;
		  	}

		  	console.log(lib.find(debuk));

		  	
		  	cleardrow(lib);
		  }

		 //adding a book row to the DOM
		 function addbkro(bk) {
				var tebody = document.querySelector('#tb');	
		 	   	var terow = document.createElement('tr');
		 		terow.innerHTML = `
		 			<td>${bk.id}</td>
		 			<td>${bk.title}</td>
		 			<td>${bk.author}</td>
		 			<td>${bk.pages}</td>
		 			<td>${bk.status}</td>
		<td><input type="button" onclick="steto()" value="${bk.status}"> </td>
		<td><input type="button" onclick="dell()" value="delete"> </td>
		 		`;
		 	    tebody.append(terow);
		 }

