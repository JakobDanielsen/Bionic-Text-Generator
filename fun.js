document.getElementById("tField").addEventListener("submit",(event) => {
    event.preventDefault()
    translate(document.getElementById("tArea").value)
})

// const e = require('express');
// import the readline-sync module
// const readlineSync = require('readline-sync');

// prompt the user for input and store the result in a variable
// const text = readlineSync.question('Paste the text you would like to bionify: ');
function translate(text){
    console.log(text);
        // do something with the input
    let wordArray = text.split(" ")
    let finishedText = ""
    // console.log(wordArray);
    wordArray.forEach(e => {
        let mid
        let currentWord
        // console.log(e);
        // console.log(e.length);
        if (e.length%2===0) {
            mid = e.length/2
        } else {
            mid = (e.length+1)/2
        }
        // console.log(mid);
        currentWord = "<b>".concat(e.slice(0,mid)).concat("","</b>").concat(e.slice(mid,e.length))
        // console.log(currentWord); // THIS IS PROBABLY EXTREMELY INEFFICIENT BUT IT WORKS
        finishedText = finishedText + currentWord.concat("", " ")
        document.getElementById("bArea").innerHTML = finishedText
    });

    // console.log(`MIDWAY:${wordArray}`);
    console.log(`FINISHED:${finishedText}`);
}


