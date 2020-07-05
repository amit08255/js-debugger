This is simple small debugger designed to debug NodeJS and JavaScript code as well. This module can be used both on NodeJS server-side and in browser client-side.

### Example

```js
function sum(a,b){
   return a+b;
}

sum.nodedeb()(1,2);
```

Above code uses our debugger with sum function and when sum with `deb()` is executed, it logs everything on console such as stack trace, arguments received, function name, data returned, execution time.

To use this module in nodejs app import the module -

```js
import {nodeDeb} from './node-deb';
```
