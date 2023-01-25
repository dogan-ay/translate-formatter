
const button = document.querySelector('.button')
/*
button.addEventListener('click',  function() {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            chrome.runtime.sendMessage({format: "true"})
        
    });
});*/


button.addEventListener('click', function() {
    return chrome.tabs.query({active: true, currentWindow: true}) 
        .then(tabs => {
            return chrome.tabs.sendMessage(tabs[0].id, {format: "true"})
        })
        .catch(err => console.log(err))
})




/*
button.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, 
        function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {format: "true"}).then(() => console.log('basarılı')).catch(()=> console.log('error'))
    })

});

*/
/*
button.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, 
        chrome.tabs.query({active: true, currentWindow: true}, 
        function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {format: "true"})
    }))


});

*/
