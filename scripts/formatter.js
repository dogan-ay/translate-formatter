/*
//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    request.format == "true" ? formatter() : null
    
    sendResponse('test');
});*/




chrome.runtime.onMessage.addListener((request, sender, response) => {
    console.log('received', request)
    request.format == "true" ? formatter() : null
});


function formatter() {
    let textarea = document.querySelector('textarea');
    let text = textarea.value;
    text = text.replace(/\n/g,' ');
    textarea.value = text;    
    textarea.innerHTML = text;
}