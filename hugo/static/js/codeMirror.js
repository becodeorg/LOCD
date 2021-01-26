let HTMLeditor = CodeMirror.fromTextArea(
    document.getElementById('textareaCode'), {
      theme:"locd-dark",
		  lineNumbers: true,
      mode: 'text/html',
      htmlMode: true,
      lineWrapping: true,
		  smartIndent: false,
      addModeClass: true,
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

//  let CSSeditor = CodeMirror.fromTextArea(
//     document.getElementById('textareaCodeCSS'), {
//       theme:"locd-dark",
// 		  lineNumbers: true,
//       mode: 'css',
//       htmlMode: true,
//       lineWrapping: true,
// 		  smartIndent: false,
//       addModeClass: true,
//       extraKeys: {
//         'Tab': 'emmetExpandAbbreviation',
//         'Esc': 'emmetResetAbbreviation',
//         'Enter': 'emmetInsertLineBreak',
//         "Ctrl": "autocomplete"
//     },
//     globalVars: true,
//     emmet: {
//       preview:['html'],
//       markupStyle:'html'
//   }
// })