async function createCssFile(textAr,element, type, file) {
  let text = document.getElementById(textAr).value;
  
  let docEl = document.createElement(element);
  docEl.type = type;
  

  if(element === "link"){
    const content = `data:text/css;base64,${await toBase64(text)}`;
    docEl.rel = file;
    docEl.href = await content;
  }else{
    const content = `data:text/javascript;base64,${await toBase64(text)}`;
    docEl.src = await content;
    docEl.defer = true;
    console.log(docEl)
  }
  return docEl;
}

function toBase64(text) {
  return new Promise((f) => {
    const reader = new FileReader();
    reader.addEventListener("load", (ev) =>
      f(reader.result.slice(reader.result.indexOf(",") + 1))
    );
    reader.readAsDataURL(new Blob([text]));
  });
}

function insertFiles(content, ...elements) {
  let lines = content.replace(/\r\n/g, "\n").split("\n");
  elements.map((element)=>{
    const head = (element) => element === "</head>";
    let index = lines.findIndex(head);
    lines.splice(index, 0, element.outerHTML); 
  })
  let array = lines.join(" ");
  return array;
  
}

//viewing function for text area to IFrame
function viewContent(n) {
  if (HTMLeditor) {
    HTMLeditor.save();
    CSSeditor.save();
    JSeditor.save();
  }
  
  let text = document.getElementById("textareaCodeHTML").value;

  Promise.all([ createCssFile("textareaCodeCSS","link", "text/css", "stylesheet"),createCssFile("textareaCodeJS","script", "text/javascript", "stylesheet")]).then((values)=>{
    text = insertFiles(text,values[0],values[1]);
    writeIFrame(text);
  })
}

function writeIFrame(html) {
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
  ifrw.document.write(html);
  ifrw.document.close();
  console.log('saved...')
      
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
