export default {
    // HTML and static assets live in `public/`; without this, Vite looks for
    // `index.html` at the repo root and `/` returns 404.
    root: "public",
    publicDir: false,
    server: {
        host: true,
    },
};