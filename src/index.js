// Wait for DOM to fully load before executing JS
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to submit button
  document
    .querySelector(".btn-primary")
    .addEventListener("click", submitAction);
});

function submitAction() {
  event.preventDefault();
  console.log("clicked");
}

function quoteCardConstructor(quote, footer, likes) {
  const li = document.createElement("li");
  const blockQuote = document.createElement("blockquote");
  const p = document.createElement("p");
  const foot = document.createElement("footer");
  const br = document.createElement("br");
  const buttonSuccess = document.createElement("button");
  const buttonSuccessSpan = document.createElement("span");
  const buttonDelete = document.createElement("button");

  li.setAttribute("class", "quote-card");
  blockQuote.setAttribute("class", "blockquote");
  p.setAttribute("class", "mb-0");
  foot.setAttribute("class", "blockquote-footer");
  buttonSuccess.setAttribute("class", "btn-success");
  buttonDelete.setAttribute("class", "btn-danger");

  p.textContent = quote;
  foot.textContent = footer;
  buttonSuccess.textContent = "Likes: ";
  buttonSuccessSpan.textContent = likes;
  buttonDelete.textContent = "Delete";

  li.append(blockQuote);
  blockQuote.append(p);
  blockQuote.append(foot);
  blockQuote.append(br);
  blockQuote.append(buttonSuccess);
  blockQuote.append(buttonDelete);
  buttonSuccess.append(buttonSuccessSpan);

  const body = document.getElementsByTagName("body")[0];
  body.appendChild(li);
}

quoteCardConstructor("I'm saying something", "This is a footer", 3);
