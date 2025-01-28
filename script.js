// select element of dom
const reedCheck = document.querySelector(".label-check input");
const reedDate = document.getElementById("reedDate");
const lbls = [...document.querySelectorAll(".input-label")];
const form = document.getElementById("submitForm");
const nameInp = document.getElementById("book-name");
const authorInp = document.getElementById("book-author");
const publisherInp = document.getElementById("book-publisher");
const reedDateInp = document.getElementById("book-reed-date");
const submitBtn = form.querySelector('button[type="submit"]');

const bookList = [];

// if reedCheck is true book-reed-date display grid

reedCheck.addEventListener("change", function () {
  this.checked
    ? (reedDate.style.display = "grid")
    : (reedDate.style.display = "none");
});

// validate function for input.vlaue exist

function validate(inp) {
  const bookName = nameInp.value.trim();
  const bookAuthor = authorInp.value.trim();
  const bookPublisher = publisherInp.value.trim();
  const bookReedDate = reedCheck.checked ? reedDateInp.value.trim() : true;

  const err = inp.parentElement.querySelector(".error");

  if (inp.value) {
    err.style.display = "none";
  } else {
    err.style.display = "block";
  }

  if (bookName && bookAuthor && bookPublisher && bookReedDate) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}

// run validate function

nameInp.addEventListener("input", function () {
  validate(this);
});
authorInp.addEventListener("input", function () {
  validate(this);
});
publisherInp.addEventListener("input", function () {
  validate(this);
});
reedDateInp.addEventListener("input", function () {
  validate(this);
});

// submit form

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookName = nameInp.value.trim();
  const bookAuthor = authorInp.value.trim();
  const bookPublisher = publisherInp.value.trim();
  const bookReedDate = reedCheck.checked ? reedDateInp.value.trim() : true;

  const book = {
    bookName,
    bookAuthor,
    bookPublisher,
    bookReedDate: bookReedDate === true ? "-" : bookReedDate,
  };
  bookList.push(book);

  console.log(bookList);
});
