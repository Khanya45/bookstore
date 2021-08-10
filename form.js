let tabPanes = document
  .getElementsByClassName("tab-header")[0]
  .getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    document
      .getElementsByClassName("tab-header")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    tabPanes[i].classList.add("active");

    document
      .getElementsByClassName("tab-content")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("tab-content")[0]
      .getElementsByClassName("tab-body")
      [i].classList.add("active");
  });
}

var form = document.getElementsByClassName("form-element");
form.addEventListener("submit", logIn);

function logIn(e) {
  var inputs = document.getElementsByTagName("input");
  for (index = 0; index < x.length; ++index) {
    alert(inputs[index].value);
  }
}

function getToken() {
  fetch("https://damp-reef-26653.herokuapp.com/auth", {
    method: "post",
    body: JSON.stringify({ username: "khanya93", password: "khanyag45" }),
  }).then((res) => {
    console.log(res);
    res.json();
    console.log(res["access_token"]);
    localStorage.setItem("jwt-token", res["access_token"]);
  });

  const accessToken = localStorage.getItem("jwt-token");
  fetch("https://damp-reef-26653.herokuapp.com/get-blogs/", {
    method: "post",
    headers: {
      Authorization: `jwt ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}
