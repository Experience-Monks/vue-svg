# vue-svg

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A Vue directive that will add a svg from a svg sprite sheet to an element.

## Usage


```
var fs = require('fs');
var Vue = require('vue');
Vue.use(require('vue-svg'),{
  sprite: fs.readFileSync(__dirname + 'sprites.svg', 'utf8'),
  prefix: 'svg-sprite--'
});
```

You will need a [grunt](https://www.npmjs.com/package/grunt-svg-sprite) or gulp task to concatenate your individual svgs into a single file. Sometimes these tasks will add a prefix to namespace the individual svgs. Just add this prefix to the options and use the individual file name in the directive as follows:
```
<div v-svg="close-icon"></div>
```

[![NPM](https://nodei.co/npm/vue-svg.png)](https://www.npmjs.com/package/vue-svg)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/vue-svg/blob/master/LICENSE.md) for details.
