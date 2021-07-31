export default (css, js, html) => {
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
