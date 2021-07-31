import maximice from "../assets/img/four-arrows-interface-symbol-to-maximize-size.svg";
import minimize from "../assets/img/minimize-arrows.svg";
import show from "../assets/img/visible-eye.svg";
import hide from "../assets/img/close-eyes.svg";
import { htmlEditor, cssEditor, jsEditor } from "./aceEditor";

const resize = (evt) => {
  const targetName = evt.target.getAttribute("target");
  const target = document.querySelector(targetName);
  target.parentElement.classList.toggle("maximized");
  if (target.parentElement.classList.contains("maximized")) {
    evt.target.setAttribute("src", minimize);
  } else {
    evt.target.setAttribute("src", maximice);
  }
};

const toggleVisibility = () => {
  const button = document.querySelector("#toggleActionIcon");
  const actionButtons = document.querySelectorAll(".action-buttons");
  actionButtons.forEach((panel) => panel.classList.toggle("hiden"));
  if (actionButtons[0].classList.contains("hiden"))
    button.setAttribute("src", hide);
  else button.setAttribute("src", show);
};

const plusZoom = (evt) => {
  const targetName = evt.target.getAttribute("target");
  switch (targetName) {
    case "#htmlForm":
      htmlEditor.setFontSize(htmlEditor.getFontSize() + 1);
      break;
    case "#cssForm":
      cssEditor.setFontSize(cssEditor.getFontSize() + 1);
      break;
    case "#jsForm":
      jsEditor.setFontSize(jsEditor.getFontSize() + 1);
      break;
  }
};

const minusZoom = (evt) => {
  const targetName = evt.target.getAttribute("target");
  switch (targetName) {
    case "#htmlForm":
      htmlEditor.setFontSize(htmlEditor.getFontSize() - 1);
      break;
    case "#cssForm":
      cssEditor.setFontSize(cssEditor.getFontSize() - 1);
      break;
    case "#jsForm":
      jsEditor.setFontSize(jsEditor.getFontSize() - 1);
      break;
  }
};

export default function addActionIcons(area) {
  const resizeIcons = document.querySelectorAll(".action-buttons .resize");
  resizeIcons.forEach((el) => el.addEventListener("click", resize));

  const toggleVisibilityIcon = document.querySelector("#toggleActionIcon");
  toggleVisibilityIcon.addEventListener("click", toggleVisibility);

  const plusZoomIcons = document.querySelectorAll(
    ".action-buttons .font-size-plus"
  );
  plusZoomIcons.forEach((el) => el.addEventListener("click", plusZoom));

  const minusZoomIcons = document.querySelectorAll(
    ".action-buttons .font-size-minus"
  );
  minusZoomIcons.forEach((el) => el.addEventListener("click", minusZoom));
}
