
hljs.configure({   // optionally configure hljs
  languages: ['javascript']
});

const editor = new Quill("#htmlForm", {
  modules: {
    syntax: true, // Include syntax module
    toolbar: [['code-block']]
  },
});
