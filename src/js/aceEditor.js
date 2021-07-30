const htmlEditor = ace.edit("htmlForm");
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.getSession().setMode("ace/mode/html");

const cssEditor = ace.edit("cssForm");
cssEditor.setTheme("ace/theme/kr_theme");
cssEditor.getSession().setMode("ace/mode/css");

const jsEditor = ace.edit("jsForm");
jsEditor.setTheme("ace/theme/dracula");
jsEditor.getSession().setMode("ace/mode/javascript");

export  {htmlEditor, cssEditor, jsEditor}