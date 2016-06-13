'use strict';

function fibonacci_series(n) {
    var arr = [0];

    if(n > 1) {
        arr.push(1);
        for (var i = 2; i < n + 1; i++) {
            arr.push(arr[i-2] + arr[i-1]);
        }
    }

    else{
        arr.push(1) ;
    }

    return arr;
}


module.exports = fibonacci_series;
