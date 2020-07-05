```js
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];


var __sum = function(a,b){
  return a+b;
}


var __inc = function(a){
  return a+1;
}


var sum = compose(__inc, __sum);


var sumfun = interceptFunction(sum, 
   {before: (x) => console.log("before", x), after: (x) => console.log("after", x)})

sumfun(2,3);
```

Above example is simple, it intercepts sum function and when intercepted function is called, it prints first argument before function call and prints function result after that. Function must return something to print data after that.