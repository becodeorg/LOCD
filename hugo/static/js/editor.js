Split(['.editor__input','.editor__output'],{
	direction:"vertical",
	gutterSize:15,
})

submitTryit();


let typingTimer;
const doneTypingCount = 1500;

document.addEventListener('keyup',()=>{

  clearTimeout(typingTimer);
  
  typingTimer = setTimeout(noTyping, doneTypingCount);
});

function noTyping(){
  console.clear();
  console.log('cleared!')
  submitTryit();
}

function submitTryit(n) {

    if (window.editor) {
        window.editor.save();
      }

    var text = document.getElementById("textareaCode").value;
    // console.log(document.getElementById("textareaCode").value);
    var ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("id", "iframeResult");
    ifr.setAttribute("name", "iframeResult");
    // ifr.setAttribute("src","empty.html"); 
    ifr.setAttribute("allowfullscreen", "true");  
    document.getElementById("iframewrapper").innerHTML = "";
    document.getElementById("iframewrapper").appendChild(ifr);

    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);  
    ifrw.document.close();
  
    if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
    ifrw.document.body.contentEditable = true;
    ifrw.document.body.contentEditable = false;

    }
    
}

