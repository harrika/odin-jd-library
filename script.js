
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function() {
    ss = this.title+" by "+this.author+", "+this.pages+" pages, "+this.read;
    return ss
  }
}


mebook = new Book('wonders of alice','mukomba', 245, 'yes')
console.log(mebook.info());


let myLibrary = [];

function addBookToLibrary(b) {
  myLibrary.push(b);
}

