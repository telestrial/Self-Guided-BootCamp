const tweetForm = document.querySelector('#tweetForm');
const tweetStream = document.querySelector('#tweets')

tweetForm.addEventListener('submit', (e) => {
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b')

    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`)
    tweetStream.append(newTweet);
}