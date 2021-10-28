// Upvoted answers: 3 and above
const upvotedAnswers = Array.from(document.getElementsByClassName('answer'));
upvotedAnswers.map((node) => node.style.backgroundColor = '#ddffdb');

// Middle answers: -2 to 2
const middleAnswers = Array.from(document.querySelectorAll("div[data-score='-2'], div[data-score='-1'], div[data-score='0'], div[data-score='1'], div[data-score='2']"))
middleAnswers.map((node) => node.style.backgroundColor = '#f9ffc4');

// Downvoted: -3 and below - default: red
const downvotedAnswers = Array.from(document.getElementsByClassName('downvoted-answer'));
downvotedAnswers.map((node) => { node.style.backgroundColor = '#ffbabc';
});

function dogify() {
    console.log('dogify!')
    // Downvoted: -3 and below
    const downvotedAnswers = Array.from(document.getElementsByClassName('downvoted-answer'));
    console.log(downvotedAnswers);
    
    downvotedAnswers.map((node) => {
        // Make get request to dog api! 
        fetch('https://dog.ceo/api/breed/pembroke/images/random')
            .then((response) => response.json())
            .then((JSONData) => {
                node.style.backgroundColor = '';
                node.innerText = '';
                node.style.minHeight = 'auto'
                let dog = document.createElement('img');
                dog.src = `${JSONData.message}`
                node.appendChild(dog)
            })
            .catch(error => console.log(error))
        
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "popupInit") 
        sendResponse({farewell: "goodbye"});
        console.log('received from script');
        dogify();
    }
  );
  