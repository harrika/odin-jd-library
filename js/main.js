		var lib = [];
		var sti = ["Read", "Not Read"];
		iid= 0
		document.querySelector('#adder').addEventListener('click', addtolib);

		//seetup hte Book object
		function Book(title, author, pages, status, id) {
		    this.id = id;
		    this.title = title;
		    this.author = author;
		    this.pages = pages;
		    this.status = status;
		}

		//method to toggle the book read status
		Book.prototype.togglestat = function() {
			if (this.status == "Read") {
				(this.status = "Not Read")
			} else {
				this.status = "Read";
			}	
			//console.log(this.status);
			cleardrow(lib); 
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

		 //The function clears hten adds book rows to the DOM
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
		
		 //adding a book row to the DOM
		 function addbkro(bk) {
				var tebody = document.querySelector('#tb');	
		 	   	var terow = document.createElement('tr');
		 		terow.innerHTML = `
		 			<td>${bk.id}</td>
		 			<td>${bk.title}</td>
		 			<td>${bk.author}</td>
		 			<td>${bk.pages}</td>
		<td><input type="button" onclick="stati(${bk.id})" value="${bk.status}"> </td>
		<td><input type="button" onclick="dell()" value="delete"> </td>
		 		`;
		 	    tebody.append(terow);
		 }

		 // window.onload=function(){
		 // 	var statbtn = document.querySelector('#stat');
		 // 	statbtn.addEventListener('click', function(e) {
		 // 	var target = e.target;
		 // 	console.log(target)
		 // 	});
		 // }

		 function stati(d) {
		 	// alert(d);
		 	const i = lib.findIndex(function(bk, i) {
		 		return bk.id === d;
		 	})
		 	const buk = lib[i];
		 	buk.togglestat();		 	

		 	// alert(buk.status);
		 	// if buk.status == "Read" {
		 	// 	buk.togglestat(0);
		 	// } else {
		 	// 	buk.togglestat(0);
		 	// }
		 

		 }

// ===================================================
// how to procedd
// get bk.id from click
// find book with such id in library  lib
// delete bk
// or change status of book
// ======================================================