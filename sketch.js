
function setup() {
  // createCanvas(710, 400);

  inputAuthor = createInput();
  inputTitle = createInput();
  inputPages = createInput();
  
  inputAuthor.position(160, 65);
  inputTitle.position(160, 95);
  inputPages.position(160, 125);

  authortag = createElement('strong','Author: ');
  authortag.position(100,65);
  titletag = createElement('strong','Title: ');
  titletag.position(100,95);
  pagestag = createElement('strong','Pages: ');
  pagestag.position(100,125);

  button = createButton('add to Library');
  button.position(inputPages.x + inputPages.width+10, 125);
  button.mousePressed(saveit);

  textAlign(CENTER);
  textSize(50);
}

var lib = [];
function Book(auth, tit, pgs) {
	this.author = auth;
	this.title = tit;
	this.pages = pgs;
}

function saveit() {

  //collect values
  const author = inputAuthor.value();
  const title = inputTitle.value();
  const pages = int(inputPages.value());
  

  //clear input values
  inputAuthor.value('');
  inputTitle.value('');
  inputPages.value('');

  //add to library
  bb = new Book(author, title, pages);
  lib.push(bb);
  placeit();
  } 

function placeit() {
  lib.forEach(listing);
}

function listing(buk, index) {
	var zz = 170+25*index;  	
  	tauthor = createElement('strong',buk.author);
  	tauthor.position(120, zz);
  	ttitle = createElement('strong',buk.title);
  	ttitle.position(270, zz);
  	tpages = createElement('strong',buk.pages);
  	tpages.position(550, zz);  
  	index = createButton('delete');
  	index.position(600,zz);
   	index.mousePressed(del);
   	
   	
}

function del() {
  		lib.splice(self.index,1);
  	}


  // 	 if pages == NaN {
  // 	alert('integer required for number of pages')
  // }