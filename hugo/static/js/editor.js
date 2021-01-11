//viewing function for text area to IFrame
function viewContent(n) {
  if (window.editor) {
    window.editor.save();
  }

  var text = document.getElementById("textareaCode").value;
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");
  ifr.setAttribute("name", "iframeResult");
  ifr.setAttribute("allowfullscreen", "true");
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);

  var ifrw = ifr.contentWindow
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

  //handle bar in the editor to increase the viewports.
  Split([".editor__input", ".editor__output"], {
    direction: "vertical",
    gutterSize: 15,
  });
};

//execute at start to view the page
viewContent();
userType();
