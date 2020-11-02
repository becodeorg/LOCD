document.addEventListener("DOMContentLoaded", function(){

    window.editor = CodeMirror.fromTextArea(
    document.getElementById('textareaCode'), {
        mode:  "htmlmixed",
        htmlMode: true,
        lineWrapping: true,
        smartIndent: false,
        theme:"mdn-like",
		addModeClass: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		value: document.documentElement.innerHTML
    })
});