function functionName(func) {
    if (!func) {
        return "";
    }

    try {
        return (
            func.displayName ||
            func.name ||
            // Use function decomposition as a last resort to get function
            // name. Does not rely on function decomposition to work - if it
            // doesn't debugging will be slightly less informative
            // (i.e. toString will say 'spy' rather than 'myFunc').
            (String(func).match(/function ([^\s(]+)/) || [])[1]
        );
    } catch (e) {
        // Stringify may fail and we might get an exception, as a last-last
        // resort fall back to empty string.
        return "";
    }
};

(function() {
    
    var intercept = Function.prototype.intercept;
    var fName = functionName(this);

    Function.prototype.intercept = function() {
        console.log("\n\nIntercepting [Before]: ", fName, "\nArguments: ", arguments);
        return intercept.apply(this, arguments);
    };

    var call = Function.prototype.call;
    Function.prototype.call = function() {
        console.log("\n\nIntercepting Call [Before]: ", fName, "\nArguments: ", arguments);
        return call.apply(this, arguments);
    };

}());
