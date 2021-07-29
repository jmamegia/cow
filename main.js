import "./style.css";
import { encode, decode } from "js-base64";
import Split from "split-grid";

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
  const css = $("#cssForm");
  const js = $("#jsForm");
  const html = $("#htmlForm");
  let htmlDeco;
  let jsDeco;
  let cssDeco;
  rawHtml ? (htmlDeco = decode(rawHtml)) : (htmlDeco = "");
  rawJs ? (jsDeco = decode(rawJs)) : (jsDeco = "");
  rawCss ? (cssDeco = decode(rawCss)) : (cssDeco = "");
  css.value = cssDeco;
  js.value = jsDeco;
  html.value = htmlDeco;
  console.log(htmlDeco);
  css.addEventListener("input", update);
  js.addEventListener("input", update);
  html.addEventListener("input", update);
  $("#webPrev").setAttribute(
    "srcdoc",
    generateDocument(cssDeco, jsDeco, htmlDeco)
  );
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
  const css = $("#cssForm").value;
  const js = $("#jsForm").value;
  const html = $("#htmlForm").value;
  const hashedCode = `${encode(html)}|${encode(css)}|${encode(js)}`;
  window.history.replaceState(null, null, `/${hashedCode}`);
  $("#webPrev").setAttribute("srcdoc", generateDocument(css, js, html));
}

init();
