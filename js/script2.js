//var tableRef = document.getElementById('dtable').getElementsByTagName('tbody')[0];
//var rowCount = tableRef.rows.length;

var lib = [];
var status = ['Read', 'Not Read'];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function adding() {
	var tebody = document.querySelector('#tb');
	
    var ttitle = document.querySelector('#titleIn').value;
    var aauthor = document.querySelector('#authorIn').value;
    var ppages = document.querySelector('#pagesIn').value;
    var sstatus = document.querySelector('#redIn').value;
    
    var book = new Book(ttitle, aauthor, ppages, sstatus);
    //var newStatus;
    lib.push(book);
    // alert('pusing to book')

    // tebody.append(`
    //         <tr>
    //             <td>` + ttitle +`</td>
    //             <td>` + aauthor +`</td>
    //             <td>` + ppages +`</td>
    //             <td">` + sstatus +`</td>                
    //             <td><input type="button" onclick="del(this)" value="devare"> </td>
    //         </tr>
    //     `);


	var terow = document.createElement('tr');
	terow.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.pages}</td>
		<td>${book.status}</td>
	`;
    }

function del(e) {
    e.target.closest('tr').remove();
}








