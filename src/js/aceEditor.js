const htmlEditor = ace.edit("htmlForm");
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.getSession().setMode("ace/mode/html");
htmlEditor.setFontSize(15);

const cssEditor = ace.edit("cssForm");
cssEditor.setTheme("ace/theme/kr_theme");
cssEditor.getSession().setMode("ace/mode/css");
cssEditor.setFontSize(15);

const jsEditor = ace.edit("jsForm");
jsEditor.setTheme("ace/theme/dracula");
jsEditor.getSession().setMode("ace/mode/javascript");
jsEditor.setFontSize(15);

export { htmlEditor, cssEditor, jsEditor };
