import sass from 'rollup-plugin-sass';

export default {
  entry: 'main.js',
  dest: './js/main.min.js',
  plugins: [
    sass({
      output: './css/bundle.css'
    })
  ]
};
