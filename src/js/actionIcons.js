import maximice from "../assets/img/four-arrows-interface-symbol-to-maximize-size.svg";
import minimize from "../assets/img/minimize-arrows.svg";

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

export default function addActionIcons(area) {
  const actionButonPanels = document.querySelectorAll(
    ".action-buttons .resize"
  );
  actionButonPanels.forEach((el) => el.addEventListener("click", resize));
}
