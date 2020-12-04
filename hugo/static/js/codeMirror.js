 window.editor = CodeMirror.fromTextArea(
    document.getElementById('textareaCode'), {
      theme:"locd-dark",
		  lineNumbers: true,
      mode: 'text/html',
      htmlMode: true,
      lineWrapping: true,
		  smartIndent: false,
		  addModeClass: true
})