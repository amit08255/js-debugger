This interceptor injects the interceptor to all functions when this module is imported. It will print the parameters received by function with function name. There are two ways to use this function.

### Example 

```js
function abc(a,b){
   return a+b;
}

abc.intercept(1,2); //intercept the function explicitly.
abc(1,2); //intercept the function explicitly.

```
