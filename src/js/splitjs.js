import Split from "split-grid";
const split = Split({
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
