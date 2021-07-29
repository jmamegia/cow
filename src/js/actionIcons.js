import maximice from "../assets/img/four-arrows-interface-symbol-to-maximize-size.svg";
import minimize from "../assets/img/minimize-arrows.svg";
import show from "../assets/img/visible-eye.svg";
import hide from "../assets/img/close-eyes.svg";

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

export default function addActionIcons(area) {
  const actionButonPanels = document.querySelectorAll(
    ".action-buttons .resize"
  );
  actionButonPanels.forEach((el) => el.addEventListener("click", resize));

  const toggleActionIconButton = document.querySelector("#toggleActionIcon");
  toggleActionIconButton.addEventListener("click", toggleVisibility);
}
