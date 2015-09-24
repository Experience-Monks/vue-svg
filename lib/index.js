'use strict';

var prepend = require('prepend-child');
var select = require('dom-select');

exports.install = function (Vue, opts) {

  var dir = {
    bind: function () {

      var item = this.get(this.expression);
      if (item){
        prepend(this.el, item);
      }else{
        console.warn('[vue-svg] svg: ',this.expression,' could not be found');
      }
      
    },
    update: function (value) {

    },
    init: function (sprite, prefix) {

      this.prefix = (typeof prefix !== 'undefined') ? prefix : '';
      this.sprites = {};
      var dom = document.createElement('div');
      dom.innerHTML = sprite;
      var svgs = select.all('svg', dom);
      for (var i = 0; i < svgs.length; i++) {
        this.sprites[svgs[i].getAttribute('id')] = this.getHTML(svgs[i]);
      }
    },
    get: function (id) {
      var dom = document.createElement('div');
      dom.innerHTML = this.sprites[this.prefix + id];
      return select('svg', dom);
    },
    getHTML: function (svg) {
      var dom = document.createElement('div');
      dom.appendChild(svg);
      return dom.innerHTML;
    }
  };

  dir.init(opts.sprite, opts.prefix);

  Vue.directive('svg', dir);

};
