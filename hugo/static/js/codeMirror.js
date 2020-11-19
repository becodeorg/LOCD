document.addEventListener("DOMContentLoaded", function(){

    window.editor = CodeMirror.fromTextArea(
    document.getElementById('textareaCode'), {
		lineNumbers: true,
          mode: 'text/html',
          htmlMode: true,
          lineWrapping: true,
		  smartIndent: false,
		  theme:"locd-dark",
		  addModeClass: true
    })
});