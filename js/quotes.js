
const quotes = [
    {
        quote: "A good plan, violently executed now, is better than a perfect plan next week.",
        author: "George S. Patton",
    },
    {
        quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author: "Thomas A. Edison",
    },
    {
        quote: "The Bible promises no loaves to the loafer.",
        author: "Unknown",
    },
    {
        quote: "It's only when the tide goes out that you discover who's been swimming naked.",
        author: "Warren Buffett",
    },
    {
        quote: "A man is but the product of his thoughts. What he thinks, he becomes.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Observe Everything. Communicate Well. Draw, Draw, Draw.",
        author: "Frank Thomas",
    },
    {
        quote: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Frugality without creativity is deprivation.",
        author: "Amy Dacyczyn",
    },
    {
        quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
        author: "Michael Flatley",
    },
    {
        quote: "Energy is eternal delight.",
        author: "William Blake",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;