const htmlEditor = ace.edit("htmlForm", {
  theme: "ace/theme/monokai",
});
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.getSession().setMode("ace/mode/html");
htmlEditor.setFontSize(15);
htmlEditor.setHighlightActiveLine(false);
htmlEditor.setOptions({ highlightSelectedWord: false });

const cssEditor = ace.edit("cssForm");
cssEditor.setTheme("ace/theme/kr_theme");
cssEditor.getSession().setMode("ace/mode/css");
cssEditor.setFontSize(15);
cssEditor.setHighlightActiveLine(false);
htmlEditor.setShowPrintMargin(false);

const jsEditor = ace.edit("jsForm");
jsEditor.setTheme("ace/theme/dracula");
jsEditor.getSession().setMode("ace/mode/javascript");
jsEditor.setFontSize(15);
jsEditor.setHighlightActiveLine(false);
htmlEditor.setShowPrintMargin(false);

export { htmlEditor, cssEditor, jsEditor };
