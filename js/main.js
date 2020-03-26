var x = "asher";

function fetchResults() {
  window.x = document.getElementsByClassName("form-control")[0].value;
  console.log(window.x);
  window.location.href = "fetch.html";
}