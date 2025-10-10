// postcss.config.js (inside the frontend directory)

module.exports = {
  plugins: [
    // Other PostCSS plugins...
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};