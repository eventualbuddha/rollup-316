# demo for rollup/rollup#316

This project shows how to do conditional builds with rollup. Given `index.es6.js`:

```js
import * as Emoji from './emoticons/emoji';
import * as Smiley from './emoticons/smiley';

if (BUILD_EMOJI) {
  console.log(Emoji);
}

if (BUILD_SMILEY) {
  console.log(Smiley);
}
```

And using the `rollup-plugin-replace` plugin, we create `script/build.js` to build multiple times with different options:

```js
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
```

With the resulting `index-with-emoji.cjs.js` looking like so:

```js
'use strict';

const grinningFace = '\xF0\x9F\x98\x81';


var Emoji = Object.freeze({
	grinningFace: grinningFace
});

if (true) {
  console.log(Emoji);
}
```

And the resulting `index-with-smiley.cjs.js` looking like so:

```js
'use strict';

const grinningFace$1 = ':)';


var Smiley = Object.freeze({
	grinningFace: grinningFace$1
});

if (true) {
  console.log(Smiley);
}
```

Voilà ;)
