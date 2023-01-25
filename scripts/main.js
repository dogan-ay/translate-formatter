const button = document.querySelector('.button')

button.addEventListener('click', function() {
    return chrome.tabs.query({active: true, currentWindow: true}) 
        .then(tabs => {
            return chrome.tabs.sendMessage(tabs[0].id, {format: "true"})
        })
        .catch(err => console.log(err))
})


