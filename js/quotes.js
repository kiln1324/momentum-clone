const quotes = [
  {
    quote:
      "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
    author: "Thomas A. Edison",
  },
  {
    quote: "We need men who can dream of things that never were.",
    author: " John F. Kennedy",
  },
  {
    quote:
      "Study without desire spoils the memory, and it retains nothing that it takes in.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "Don't be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Education... has produced a vast population able to read but unable to distinguish what is worth reading.",
    author: "G. M. Trevelyan",
  },
  {
    quote: "If you would thoroughly know anything, teach it to others.",
    author: "Tryon Edwards",
  },
  {
    quote:
      "Great ability develops and reveals itself increasingly with every new assignment.",
    author: "Baltasar Gracian",
  },
  {
    quote:
      "Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.",
    author: "Erica Jong",
  },
  {
    quote:
      "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.",
    author: "Mary Wilson Little",
  },
  {
    quote:
      "What is written without effort is in general read without pleasure.",
    author: "Samuel Johnson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
