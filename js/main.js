
//The book class
class Book {
	constructor (title, author, pages, status, id) {
	    this.id = id;
	    this.title = title;
	    this.author = author;
	    this.pages = pages;
	    this.status = status;
	}

	togglestat() {
		if  (this.status == "Read") {
			(this.status = "Not Read")
		}else {
			this.status = "Read";
		}	
		// this.cleardrow(lib); 
	}
}

// The Canvas class initialises a library
class Canvas {
	constructor(library){
		this.library = library;
	}

	//adds book to library, clears page and adds to page
	addaBook(bk) {
		this.library.push(bk);
		this.clearPage(); 
		this.adder(lib); 
	}

	//get inputs, createa new book and add it
	addtolib(e) {
		var ttitle = document.querySelector('#titleIn').value;
		var aauthor = document.querySelector('#authorIn').value;
		var ppages = document.querySelector('#pagesIn').value;
		var sstatus = document.querySelector('#redIn').value; 
		iid += 1;
		var newbook = new Book(ttitle, aauthor, ppages, sstatus, iid);
		this.addaBook(newbook);
	}

	//changes read status upon clicking status button
	stati(d) {
		const i = lib.findIndex(function(bk, i) {
	 		return bk.id === d;
	 	})
	 	const buk = lib[i];
	 	buk.togglestat();	
	 	this.clearPage(); 
		this.adder(lib); 	
	 }

	//deletes book from library, clears page and adds to page
	deleBook(rowid) {
		const pp = lib.findIndex(function(bk, pp) {
			return bk.id === rowid;
		})
		lib.splice(pp,1);
		this.clearPage(); 
		this.adder(lib); //add lib to page ==============>
	}

	//clears the page
	clearPage() {
		var tebo = document.querySelector('#dtable');	
		while(tebo.rows.length > 0) {
			 tebo.deleteRow(0);
		}
	}

	adder(lb) {
		lb.forEach(bb => {
			this.addtoPage(bb);
		});
	}

	//adds a book to the page
	addtoPage(buuk) {
		var tebody = document.querySelector('#tb');	
		var terow = document.createElement('tr');
		terow.innerHTML = `
			<td>${buuk.id}</td>
			<td>${buuk.author}</td>
			<td>${buuk.title}</td>
			<td>${buuk.pages}</td>
			<td><input type="button" onclick="statchange(${buuk.id})"
				value="${buuk.status}"></td>
			<td><input type="button" onclick="dell(${buuk.id})"
				value="delete"> </td>
			`;
		 tebody.append(terow);
	}
}

var lib = [];
var iid = 0;
let libone = new Canvas(lib);
document.querySelector('#adder').addEventListener('click', addtolibc);

function addtolibc(e) {
	e.preventDefault();
	libone.addtolib();
}

function dell(rwid) {
	libone.deleBook(rwid);	
}

function statchange(id) {
	libone.stati(id);	
}


