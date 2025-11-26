class Book{
  constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
    this.isIssued=false;
  }
  issueBook(){
    if(this.isIssued) return false;
    this.isIssued=true;
    return true;
  }
  returnBook(){
    if(!this.isIssued) return false;
    this.isIssued=false;
    return true;
  }
}

const books=[
  new Book("A","AuthorA","111"),
  new Book("B","AuthorB","222"),
  new Book("C","AuthorC","333")
];

function availableBooks(){
  return books.filter(b=>!b.isIssued);
}

function issueByISBN(code){
  let b=books.find(x=>x.isbn===code);
  if(!b) return "Not found";
  if(b.isIssued) return "Already issued";
  b.issueBook();
  return "Issued";
}

console.log(availableBooks());
console.log(issueByISBN("111"));
