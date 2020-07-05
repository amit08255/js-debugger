export const nodeDeb = (function(root, factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else {
      factory();
  }
}(this, function() {
Function.prototype.nodedebc = function(desc) {
  return Function.prototype.deb.apply(this, [desc, true])
}
Function.prototype.nodedeb = function(desc, collapsed) {

  var log = function(str, group, styles) {
    if(typeof console === 'undefined') return;
    console[group ? 'group' : 'log'](str);
  }

  var groupEnd = function() {
    if(typeof console === 'undefined') return;
    console.groupEnd();
  }

  var getFnDef = function(fn) {
    var result = fn.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m);
    return result ? result[0] : "Unknown Function";
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
    grouping = console && console.group && console.groupEnd;

  return function() {
    var time = Date.now();
    fnIn((new Error()).stack.split(new RegExp("\\n")), arguments, fn);
    var res = fn.apply(this, Array.prototype.slice.call(arguments, 0));
    fnOut(time, res);
    return res;
  }
}
}));