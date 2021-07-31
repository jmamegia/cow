import { encode, decode } from "js-base64";

import "./style.css";
import "./src/css/navCss.css";
import "./src/css/grid.css";
import "./src/css/buttons.css";

import "./src/js/splitjs";
import actionButtons from "./src/js/actionIcons";
import generateDocument from "./src/js/generateDocument";
import { htmlEditor, cssEditor, jsEditor } from "./src/js/aceEditor";

const $ = (el) => document.querySelector(el);

const init = () => {
  const { pathname } = window.location;
  const [rawHtml, rawCss, rawJs] = pathname.slice(1).split("%7C");
  let htmlDeco;
  let jsDeco;
  let cssDeco;
  rawHtml ? (htmlDeco = decode(rawHtml)) : (htmlDeco = "");
  rawJs ? (jsDeco = decode(rawJs)) : (jsDeco = "");
  rawCss ? (cssDeco = decode(rawCss)) : (cssDeco = "");
  cssEditor.insert(cssDeco);
  jsEditor.insert(jsDeco);
  htmlEditor.insert(htmlDeco);

  jsEditor.on("change", update);
  cssEditor.on("change", update);
  htmlEditor.on("change", update);
  $("#webPrev").setAttribute(
    "srcdoc",
    generateDocument(cssDeco, jsDeco, htmlDeco)
  );
  actionButtons();
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
