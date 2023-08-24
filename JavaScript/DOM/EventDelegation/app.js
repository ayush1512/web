const lis = document.querySelectorAll('li');
for(let li of lis){
    li.addEventListener('click', function(){
        li.remove();
    })
}

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    const usernameInput = tweetForm.elements.username; // get the username input
    const tweetInput = tweetForm.elements.tweet; // get the tweet input
    addTweet(usernameInput.value, tweetInput.value); // add the tweet to the DOM
    usernameInput.value = ''; // clear the username input
    tweetInput.value = ''; // clear the tweet input
});

function addTweet(username, tweet){
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function(e){
    e.target.nodeName === 'LI' && e.target.remove();
});