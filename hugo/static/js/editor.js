//viewing function for text area to IFrame
function viewContent(n) {
  if (window.editor) {
    window.editor.save();
  }

  let text = document.getElementById("textareaCode").value;
  let ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");
  ifr.setAttribute("name", "iframeResult");
  ifr.setAttribute("allowfullscreen", "true");
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);

  let ifrw = ifr.contentWindow
    ? ifr.contentWindow
    : ifr.contentDocument.document
    ? ifr.contentDocument.document
    : ifr.contentDocument;
  ifrw.document.open();
  ifrw.document.write(text);
  ifrw.document.close();
}

//Update Iframe when user is done typing
let userType = () => {
  let typingTimer;
  const doneTypingCount = 1500;

  document.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(noTyping, doneTypingCount);
  });

  function noTyping() {
    console.clear();
    viewContent();
  }
};



//execute at start to view the page
viewContent();
userType();
