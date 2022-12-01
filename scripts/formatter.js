chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    request.format == "true" ? formatter() : null
    
    sendResponse('test');
});

const textarea = document.querySelector('textarea')

function formatter() {
    const text = textarea.innerHTML;
    console.log(textarea.innerHTML)
    
}