
const button = document.querySelector('.button');

button.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {format: "true"})
    }))


});
