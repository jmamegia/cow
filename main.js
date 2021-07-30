import "./style.css";
import "./src/css/navCss.css";
import {htmlEditor, cssEditor, jsEditor} from"./src/js/aceEditor"

import { encode, decode } from "js-base64";
import Split from "split-grid";
import actionButtons from "./src/js/actionIcons";
const $ = (el) => document.querySelector(el);
Split({
  columnGutters: [
    {
      track: 1,
      element: document.querySelector(".vertical-gutter-1"),
    },
    {
      track: 3,
      element: document.querySelector(".vertical-gutter-2"),
    },
  ],
  rowGutters: [
    {
      track: 1,
      element: document.querySelector(".horizontal-gutter"),
    },
  ],
});

const init = () => {
  const { pathname } = window.location;
  const [rawHtml, rawCss, rawJs] = pathname.slice(1).split("%7C");

  let htmlDeco;
  let jsDeco;
  let cssDeco;
  rawHtml ? (htmlDeco = decode(rawHtml)) : (htmlDeco = "");
  rawJs ? (jsDeco = decode(rawJs)) : (jsDeco = "");
  rawCss ? (cssDeco = decode(rawCss)) : (cssDeco = "");
  cssEditor.setValue(cssDeco);
  jsEditor.setValue(jsDeco);
  htmlEditor.setValue(htmlDeco);

  jsEditor.on("change", update)
  cssEditor.on("change", update)
  htmlEditor.on("change", update)
  $("#webPrev").setAttribute(
    "srcdoc",
    generateDocument(cssDeco, jsDeco, htmlDeco)
  );
  actionButtons();
};

const generateDocument = (css, js, html) => {
  return `
<html lang="en">
  <head>
    <style> ${css} </style>
  </head>
  <body>
    ${html}
    <script>
    ${js}
    </script>
  </body>
</html>

`;
};

function update() {
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();
  const html = htmlEditor.getValue();
  const hashedCode = `${encode(html)}|${encode(css)}|${encode(js)}`;
  window.history.replaceState(null, null, `/${hashedCode}`);
  $("#webPrev").setAttribute("srcdoc", generateDocument(css, js, html));
}

init();
