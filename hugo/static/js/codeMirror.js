let HTMLeditor = CodeMirror.fromTextArea(
    document.getElementById('textareaCodeHTML'), {
      theme:"locd-dark",
		  lineNumbers: true,
      mode: 'text/html',
      htmlMode: true,
      lineWrapping: true,
		  smartIndent: false,
      addModeClass: true,
      indentUnit: 1,
      tabSize: 2,
      extraKeys: {
        'Tab': 'emmetExpandAbbreviation',
        'Esc': 'emmetResetAbbreviation',
        'Enter': 'emmetInsertLineBreak',
        "Ctrl": "autocomplete"
    },
    globalVars: true,
    emmet: {
      preview:['html'],
      markupStyle:'html'
  }
})

 let CSSeditor = CodeMirror.fromTextArea(
    document.getElementById('textareaCodeCSS'), {
      theme:"locd-dark",
		  lineNumbers: true,
      mode: 'css',
      htmlMode: true,
      lineWrapping: true,
		  smartIndent: false,
      addModeClass: true,
      tabSize: 2,
      extraKeys: {
        'Tab': 'emmetExpandAbbreviation',
        'Esc': 'emmetResetAbbreviation',
        'Enter': 'emmetInsertLineBreak',
        "Ctrl": "autocomplete"
    },
    globalVars: true,
    emmet: {
      preview:['html'],
      markupStyle:'html'
  }
})

let JSeditor = CodeMirror.fromTextArea(
    document.getElementById('textareaCodeJS'), {
      theme:"locd-dark",
		  lineNumbers: true,
      mode: 'text/javascript',
      htmlMode: true,
      lineWrapping: true,
		  smartIndent: false,
      addModeClass: true,
      tabSize: 2,
      extraKeys: {
        'Tab': 'emmetExpandAbbreviation',
        'Esc': 'emmetResetAbbreviation',
        'Enter': 'emmetInsertLineBreak',
        "Ctrl": "autocomplete"
    },
    globalVars: true,
    emmet: {
      preview:['html'],
      markupStyle:'html'
  }
})