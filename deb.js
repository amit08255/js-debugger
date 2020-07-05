export const deb = (function(root, factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else {
      factory();
  }
}(this, function() {
Function.prototype.debc = function(desc) {
  return Function.prototype.deb.apply(this, [desc, true])
}
Function.prototype.deb = function(desc, collapsed) {

  if(typeof window === 'undefined'){
      return this;
  }

  var getColor = function() {

    var colors = ["#372549", "#f77f00", "#bc6c25", "#150578", "#5f0f40", "#9e2a2b", "#531253", "#390040",
                  "#220901", "#241726", "#247ba0", "#432371", "#13315c", "#19381f", "#a53860", "#3b28cc",
                  "#774936", "#6f2dbd", "#00171f", "#553a25", "#156064", "#6a0136", "#c20114", "#23272a"]

    var index = (Math.floor(Math.random() * 24));

    return colors[index];
  }
  var log = function(str, group, styles) {
    if(typeof console === 'undefined') return;
    if(is_chrome && typeof str === 'string') {
      if(styles !== false && str.indexOf('%20') < 0) {
        console[group ? (collapsed ? 'groupCollapsed' : 'group') : 'log']('%c' + str, 'background:' + bg + ';' + styles);
      } else {
        console[group ? (collapsed ? 'groupCollapsed' : 'group') : 'log'](str);
      }
    } else {
      console[group ? 'group' : 'log'](str);
    }
  }
  var groupEnd = function() {
    if(typeof console === 'undefined') return;
    console.groupEnd();
  }
  var getFnDef = function(fn) {
    return fn.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[0];
  }
  var fnIn = function(stack, args, fn) {
    var fnDef = getFnDef(fn);
    // in
      if (stack[0].indexOf('Error') === 0) { stack = stack.slice(1); }
    log(desc + fnDef + ')', grouping);
      // arguments
      if(args && args.length > 0) {
        log('arguments:', true);
      for(var i=0; i<args.length; i++) {
        var a = typeof args[i] == 'function' ? 'function' : args[i];
        log(a, false, 'color:#fff;font-size:10px;');
      }
      groupEnd();
    }
    // stack trace
      if(stack && stack.length > 1) {
        log('stack trace:', true);
      for(var i=0; i<stack.length; i++) {
        log('  ' + stack[i].trim(), false, false);
      }
      groupEnd();
    }
  }
  var fnOut = function(time, res) {
    var isFunc = typeof res == 'function';
    log('  returns: ' + ((isFunc && getFnDef(res)) || ''), !isFunc);
    !isFunc && (log(res, false) || groupEnd());
    log('  duration: ' + (Date.now() - time) + 'ms');
    log('}');
    if(grouping) { groupEnd(); }
  }

  var fn =  this, 
    desc = desc ? desc + ': ' : '',
    indent = 0, bg,
    grouping = console && console.group && console.groupEnd,
    is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  return function() {
    bg = getColor();
    var time = Date.now();
    fnIn((new Error()).stack.split(new RegExp("\\n")), arguments, fn);
    var res = fn.apply(this, Array.prototype.slice.call(arguments, 0));
    fnOut(time, res);
    return res;
  }
}
}));