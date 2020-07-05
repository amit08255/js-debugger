function interceptFunction (fnToWrap, options) {
    var noop = function () {};
    var before = options.before || noop;
    var after = options.after || noop;

    return function () {
        before.apply(this, arguments);
        var result = fnToWrap.apply(this, arguments);
        after.apply(this, [result]);
        return result
    }
}