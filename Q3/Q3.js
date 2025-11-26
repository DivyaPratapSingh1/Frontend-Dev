class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }
  issueBook() { this.isIssued = true; }
  returnBook() { this.isIssued = false; }
}
const books = [
  new Book("Book A", "Author A", "111"),
  new Book("Book B", "Author B", "222"),
  new Book("Book C", "Author C", "333", true),
];
console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));
function issueBookByISBN(isbn) {
  const book = books.find(b => b.ISBN === isbn);
  if (book && !book.isIssued) {
    book.issueBook();
    console.log(`Issued: ${book.title}`);
  } else console.log("Book not available.");
}
issueBookByISBN("111");