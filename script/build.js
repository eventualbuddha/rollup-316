const rollup = require('rollup').rollup;
const replace = require('rollup-plugin-replace');

rollup({
  entry: 'index.es6.js',
  plugins: [
    replace({
      BUILD_EMOJI: 'true',
      BUILD_SMILEY: 'false'
    })
  ]
}).then(bundle => {
  bundle.write({
    dest: 'index-with-emoji.cjs.js',
    format: 'cjs'
  });
});

rollup({
  entry: 'index.es6.js',
  plugins: [
    replace({
      BUILD_EMOJI: 'false',
      BUILD_SMILEY: 'true'
    })
  ]
}).then(bundle => {
  bundle.write({
    dest: 'index-with-smiley.cjs.js',
    format: 'cjs'
  });
});
