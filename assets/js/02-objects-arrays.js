/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

// add a new book to the books object
// using dot notation
books.book4 = "PY4E";
// using square bracket notation
books['book5'] = "JavaScript";

// remove an book from the books object
delete books.book1 
console.log(books);
// log the third book
console.log(books['book3']);
console.log(books.book3)
console.log(books.length)

// iterate over the books and log every single one
for (i in books) {
  console.log(books[i] + "\n");
}


/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array
// movies.push['Titanic']
movies[movies.length] = "Titanic";
console.log(movies);

// remove the book „Call me by your name“ from the books object
delete movies[2];
console.log(movies);
// log the first movie
console.log(movies[0]);

// iterate over the movies and log every single one 
for (i in movies) {
  console.log(movies[i] + "\n");
}