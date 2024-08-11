let book = {
  Title: "JavaScript: The Definitive Guide",
  Author: "David Flanagan",
  PublishedYear: 2020,
  Genre: "Programming",
};
//console.log(book.Title);
//console.log(book["PublishedYear"]);
book.pages = 1096;
book.ISBN = "978 - 1491952023";
book.PublishedYear = 2021;

book.Author = ["David Flangan", "agatha christy"];
let review1 = {
  reviewer: "book critic",
  comment: "a comperhensive guide on java script",
};
book.review = [review1];

console.log(book);
