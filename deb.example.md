This is simple small debugger designed to debug JavaScript code in browser. This module can be imported in nodejs app (but it will run only when code runs in browser).

### Example

```js
function sum(a,b){
   return a+b;
}

sum.deb()(1,2);
```

Above code uses our debugger with sum function and when sum with `deb()` is executed, it logs everything on console such as stack trace, arguments received, function name, data returned, execution time.

To use this module in nodejs app import the module -

```js
import {deb} from './deb';
```
