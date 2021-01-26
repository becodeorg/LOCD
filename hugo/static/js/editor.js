// // send edit data to iframe
// document.getElementById("run").addEventListener("click", async ev => {
//   const script = `data:application/javascript;base64,${await toBase64(scriptEditor.value)}`;
//   const html = `<html><head><script type="module" src="${script}"></script></head><body>${htmlEditor.value}</body>`;
//   const iframe = document.getElementById("result");
//   iframe.src = `data:text/html;charset=utf-8;base64,${await toBase64(html)}`;
// });

function toBase64(text) {
  return new Promise(f => {
    const reader = new FileReader();
    reader.addEventListener("load", ev => f(reader.result.slice(reader.result.indexOf(",") + 1)));
    reader.readAsDataURL(new Blob([text]));
  });
}



  async function run (){
  const script = `data:application/javascript;base64,${await toBase64("console.log('it works!')")}`;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = script;
  document.body.append(s);
 }


//viewing function for text area to IFrame
function viewContent(n) {
  if (HTMLeditor) {
    HTMLeditor.save();
  }

  let text = document.getElementById("textareaCode").value;
  console.log(text)
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
run();





