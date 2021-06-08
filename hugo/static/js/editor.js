//****************************************//
//***FUNCTION TO FETCH EDITORS CONTENT****//
//****************************************//

const fetchEditorContent = () =>{
  let htmlStartContent = HTMLeditor.getValue()
  let cssStartContent = CSSeditor.getValue();
  let jsStartContent = JSeditor.getValue();

  return [htmlStartContent, cssStartContent, jsStartContent];
}

// GRAB EDITORS CONTENT BEFORE USER CHANGES ANYTHING
let startContent = fetchEditorContent();


//******************************//
//***Injection of data files****//
//******************************//

//SAVE CODEMIRRORS EDITORS AND CONVERT CSS+/JS CONTENT TO BASE64 FILES.
//THIS WILL BE CALLED WHEN THE USER LOADS THE PAGE/SAVES/RESETS.
function fileBundler() {
  if (HTMLeditor) {
    HTMLeditor.save();
    CSSeditor.save();
    JSeditor.save();
  }

  let HTMLContent = HTMLeditor.getValue();

  Promise.all([
    createDataFile(CSSeditor, "link", "text/css", "stylesheet"),
    createDataFile(JSeditor, "script", "text/javascript"),
  ]).then((dataFiles) => {
    writeIFrame(insertFiles(HTMLContent, dataFiles));
  });
}

//CREATES EITHER JS/CSS DOC ELEMENT
async function createDataFile(editor, element, type, file) {
  let editorContent = editor.getValue();
  if (editorContent) {
    let docEl = document.createElement(element);
    docEl.type = type;

    if (element === "link") {
      const content = `data:text/css;base64,${await toBase64(editorContent)}`;
      docEl.rel = file;
      docEl.href = content;
    } else {
      const content = `data:text/javascript;base64,${await toBase64(editorContent)}`;
      docEl.defer = true;
      docEl.src = content;
    }
    return docEl;
  }
}

//CONVERT EDITORS CONTENT TO BASE64 FILE
function toBase64(text) {
  return new Promise((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", (ev) =>
      file(reader.result.slice(reader.result.indexOf(",") + 1))
    );
    reader.readAsDataURL(new Blob([text]));
  });
}

//INSERT BASE64 FILES BEFORE THE </HEAD> CLOSING TAG.
function insertFiles(content, dataFiles) {
  let htmlLines = content.replace(/\r\n/g, "\n").split("\n");
  dataFiles.map((dataFile) => {
    if (dataFile) {
      const head = (element) => element === "  </head>";
      let index = htmlLines.findIndex(head);
      htmlLines.splice(index, 0, dataFile.outerHTML);
    }
  });
  let newHTML = htmlLines.join("\n");
  return newHTML;
}

//UPDATE IFRAME WITH NEW CONTENT
function writeIFrame(newHTML) {
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
  ifrw.document.write(newHTML);
  ifrw.document.close();
  console.log("saved...");
}


//******************************//
//*******USER INTERACTION*******//
//******************************//


//UPDATE IFRAME WHEN USER IS DONE TYPING||THIS DOES NOT SAVE THE CONTENT!!
let userType = () => {
  let typingTimer;
  const doneTypingCount = 1500;

  document.addEventListener("keyup", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(noTyping, doneTypingCount);
  });

  function noTyping() {
    console.clear();
    fileBundler();
  }
};

//CHECK IF THERE USER HAS SAVED CONTENT - LOADS DEFAULT VALUE/SAVED CONTENT.
function loadEditor() {
  let htmlContent = localStorage.getItem(`${fetchTitle()}-html`);
  let cssContent = localStorage.getItem(`${fetchTitle()}-css`);
  let jsContent = localStorage.getItem(`${fetchTitle()}-js`);

  if (htmlContent) {
    HTMLeditor.setValue(htmlContent);
    CSSeditor.setValue(cssContent);
    JSeditor.setValue(jsContent);
  }
}

function saveEditor() {
  fileBundler();
  let htmlContent = HTMLeditor.getValue();
  let cssContent = CSSeditor.getValue();
  let jsContent = JSeditor.getValue();
  messagePop("Succesfully saved!");
  localStorage.setItem(`${fetchTitle()}-html`, htmlContent);
  localStorage.setItem(`${fetchTitle()}-css`, cssContent);
  localStorage.setItem(`${fetchTitle()}-js`, jsContent);
}


function resetEditor() {
  let resetModal = document.querySelector(".reset");
  let confirmButtons = resetModal.querySelector(".reset__selection");
  let acceptButton = confirmButtons.firstElementChild;
  let declineButton = confirmButtons.lastElementChild;

  resetModal.style = "display:block";

  acceptButton.addEventListener("click", () => {
    messagePop("Succesfully reset!");

    HTMLeditor.setValue(fetchHTMLFile());
    CSSeditor.setValue(fetchCSSFile());
    JSeditor.setValue(fetchJSFile());;

    localStorage.removeItem(`${fetchTitle()}-html`);
    localStorage.removeItem(`${fetchTitle()}-css`);
    localStorage.removeItem(`${fetchTitle()}-js`);
    resetModal.style = "display:none";
    fileBundler();
  });

  declineButton.addEventListener("click", () => {
    resetModal.style = "display:none";
  });

  //CLOSE MODAL WHEN CLICKED OUTSIDE OF RADIUS
  resetModal.addEventListener("click", (e) => {
    if (!resetModal.firstElementChild.contains(e.target)) {
      resetModal.style = "display:none";
    }
  });
}

let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveEditor);

let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetEditor);

//ANIMATED MODAL APPEARS WITH MESSAGE FOR USER.
function messagePop(text) {
  let message = document.querySelector(".successMessage");
  message.firstElementChild.innerHTML = text;
  message.classList.add("activeMessage");

  message.addEventListener("animationend", () => {
    message.classList.remove("activeMessage");
  });
}

//PREVENT USER FROM LEAVING THE PAGE IF THEY DID NOT SAVE THEIR CHANGES.
const exitHandler = (e) => {
  fileBundler();
  let storedHTML = localStorage.getItem(`${fetchTitle()}-html`);
  let storedCSS = localStorage.getItem(`${fetchTitle()}-css`);
  let storedJS = localStorage.getItem(`${fetchTitle()}-css`);

  let textStored = [storedHTML, storedCSS, storedJS];
  let textArea = fetchEditorContent();

  for (i = 0; i < textArea.length; i++) {
    if (textStored[i] !== textArea[i] && startContent[i] !== textArea[i]) {
      return "";
    }
  }
};
window.onbeforeunload = exitHandler;


//EDITOR TABS MANAGER.
let editorTypeButtons = Array.from(document.getElementById("inputTab").children);

editorTypeButtons.forEach((editorTab) => {
  if (editorTab.tagName === "DIV") {
    editorTab.addEventListener("click", () => {
      let parent = editorTab.parentElement;
      let views = [...document.querySelector(".input__container").children];

      let currentActive = parent.querySelector(".tab--selected");
      currentActive.classList.remove("tab--selected");
      editorTab.classList.add("tab--selected");

      views.forEach((view) => {
        if (view.className !== editorTab.dataset.link) {
          view.style.zIndex = "0";
        } else {
          view.style.zIndex = "1";
        }
      });
    });
  }
});

//EXECUTE AT PAGELOAD
loadEditor();
fileBundler();
userType();
