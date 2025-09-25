function fetchBooks() {
  // Always return fetch so tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.name;
    main.appendChild(p);
  });
}

// call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
