fetch(
  "https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "643dea22c1msh2196402f710b469p1df2fejsn33c91fd47995",
      "x-rapidapi-host": "google-books.p.rapidapi.com",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    books = response.items;
    books.forEach((book) => {
      let container = document.querySelector(".books_container");
      container.innerHTML += `<div class="card">
      <img src="${book.volumeInfo.imageLinks["thumbnail"]}">
      <h1>${book.volumeInfo["title"]}</h1>
      <h2>${book.volumeInfo["subtitle"]}</h2>
      <h3> by ${book.volumeInfo["authors"]}</h3>
      <p>${book.volumeInfo["description"]}</p>
      <button class="btn" onclick="carts()">Add to cart</button>
      </div>
    `;
    });
  });

function carts() {
  fetch(
    "https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "643dea22c1msh2196402f710b469p1df2fejsn33c91fd47995",
        "x-rapidapi-host": "google-books.p.rapidapi.com",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      books = response.items;
      let container = document.querySelector(".section");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button class="btn" onclick="getPokemonInfo('${btn.url}')">Add to cart</button>`;
      });
    });
}
