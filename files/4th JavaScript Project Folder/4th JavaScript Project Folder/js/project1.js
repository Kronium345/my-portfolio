const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
volumeBtn = document.querySelector(".volume"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loeading Quote...";
    // Code below is fetching random quotes from the API offered and parsing it into JavaScript
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

volumeBtn.addEventListener("click", ()=>{
    // utterance is a web speech API that controls speech requests
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // The speak method of speechSnthesis speaks the words
});

copyBtn.addEventListener("click", ()=>{
    // This is done to copy the text 
    // writeText() writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank"); // opens a Twitter page with the quote to learn more about it
});

quoteBtn.addEventListener("click", randomQuote);