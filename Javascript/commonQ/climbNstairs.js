var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    // to climb n steps we have fib(n+1) ways
    return fib(n+1);

    function fib(n) {
        var a = 1, b=1;

        while (n>2) {
            b = a+b;
            a = b -a;
            n--
        }
        return b;
    }
};
