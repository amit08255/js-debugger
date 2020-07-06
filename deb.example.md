This is simple small debugger designed to debug JavaScript code in browser. This module can be imported in nodejs app (but it will run only when code runs in browser).

### Example

```js
function sum(a,b){
   return a+b;
}

sum.deb()(1,2);
```

Above code uses our debugger with sum function and when sum with `deb()` is executed, it logs everything on console such as stack trace, arguments received, function name, data returned, execution time. There is another function provided called `debc()` which collapses debug information by default and is more cleaner way.

You can also add description to show with debug information - 
```js
functionName.debc("description")
```

To use this module in nodejs app import the module -

```js
import {deb} from './deb';
```

* **Tip:** Quickly replace debugger from your code by replacing using this regex (in visual studio code) -- **\\.debc\\(".*?"\\)**