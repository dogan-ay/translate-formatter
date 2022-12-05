chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    request.format == "true" ? formatter() : null
    
    sendResponse('test');
});



function formatter() {
    let textarea = document.querySelector('textarea');
    let text = textarea.value;
    text = text.replace(/\n/g,' ');
    textarea.value = text;    
    textarea.innerHTML = text;
}