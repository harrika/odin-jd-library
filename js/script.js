var lib = [];
var status = ['Read', 'Not Read'];

var listing = document.querySelector('#dlist');
document.querySelector('#adder').addEventListener('click', adding);


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

var tata = document.querySelector('#tb'); 

// function del(e) {
//     console.log(e.target);
//     //var tt = document.querySelector('tr')
//     //tt.removeChild(nn);
// }

function adding(e) {
    e.preventDefault();
	var tebody = document.querySelector('#tb');	
    var ttitle = document.querySelector('#titleIn').value;
    var aauthor = document.querySelector('#authorIn').value;
    var ppages = document.querySelector('#pagesIn').value;
    var sstatus = document.querySelector('#redIn').value;    
    var book = new Book(ttitle, aauthor, ppages, sstatus);

    lib.push(book);
   	var terow = document.createElement('tr');
	terow.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.pages}</td>
		<td>${book.status}</td>
        <td><input type="button" onclick="del(this)" value="delete"> </td>
	`;
    tebody.append(terow);
    }








