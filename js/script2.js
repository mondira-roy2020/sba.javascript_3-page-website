const quotes = [
    {
        name:'John F Kennedy',
        quote:'Those who dare to fail miserably can achieve greatly.'
    },{
        name:'Abraham Lincoln',
        quote:'I am a success today because I had a friend who believed in me and I did not have the heart to let him down. '
    },{
        name:'John Quincy Adams',
        quote:'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.'    
    },{
        name:'Barrack H Obama',
        quote:'We did not come to fear the future. We came here to shape it.'
    },{
        name:'Donald J Trump',
        quote:'Sometimes your best investments are the ones you donot make.'
    },{
        name:'Ronald Reagan',
        quote:'The future does not belong to the fainthearted;it belongs to the Brave.'
    },{
        name:'Bill Clinton',
        quote:'If you live long enough, you will make mistakes.But if you learn from them, you will be a better person.'
    }
    
]
const quoteBtn = document.querySelector('.quoteBtn');
const quoteAuthor = document.querySelector('.quoteAuthor');
const quote = document.querySelector('.quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML= quotes[number].quote;
    quoteAuthor.innerHTML= quotes[number].name;
}