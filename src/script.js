let colors = [
  "#DFFF00",
  "#FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF",
  "#ccecff",
  "#cedbff",
  "#cec9ff",
  "#ccb5f9",
  "#bfa9f6"
];

let quotes = [
  {
    quote:
      "You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.",
    author: "Nicholas Sparks"
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll"
  },
  {
    quote: "Be the change that you wish to see in the world",
    author: "Mahatma Gandhi"
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide"
  }
];

let newQuote = document.getElementById("new-quote");
let tweetQuote = document.getElementById("tweet-quote");
let quoteBox = document.getElementById("quote-box");
let text = document.getElementById("text");
let sign = document.getElementById("sign");
let author = document.getElementById("author");

function changeColor() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  return (
    (quoteBox.style.background = color),
    (newQuote.style.color = color),
    (sign.style.color = color),
    (tweetQuote.style.color = color)
  );
}

function chooseQuote() {
  let nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    (text.textContent = '"' + nextQuote.quote + '"'),
    (author.textContent = "-" + nextQuote.author)
  );
}
//let quoteVariable = 1;
//let authorVariable = author.textContent;

//let twitterURL = "https://twitter.com/intent/tweet?text=" + quoteVariable + " - " + authorVariable;

window.onload = changeColor() & chooseQuote();


/*@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");*/