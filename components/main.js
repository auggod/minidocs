var yo = require('yo-yo')
var css = require('dom-css')
var marked = require('marked')
var fs = require('fs')

module.exports = function (container, documents) {
  var style = {
    wrapper: {
      width: '75%',
      verticalAlign: 'top',
      display: 'inline-block'
    },
    include: {

    }
  }

  var wrapper = document.createElement('div')
  css(wrapper, style.wrapper)
  container.appendChild(wrapper)

  var include = document.createElement('div')
  css(include, style.include)
  wrapper.appendChild(include)

  function show (text) {
    include.innerHTML = text
  }

  return {
    show: show
  }
}