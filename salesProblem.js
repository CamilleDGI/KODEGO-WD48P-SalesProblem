var productProfitArray = [
    {"Product A": -75},
    {"Product B": -70},
    {"Product C": 95},
    {"Product D": 5},
    {"Product E": 88},
    {"Product F": 29}
];

var topProductValue = topProduct(productProfitArray);
var bottomProductValue = bottomProduct(productProfitArray);
var zeroProfitProductValue = zeroProfitProduct(productProfitArray);

function topProduct(array) {
    var maxProfit = Number.NEGATIVE_INFINITY;
    var topProduct;

    for (var i = 0; i < array.length; i++) {
        var product = Object.keys(array[i])[0];
        var profit = array[i][product];

        if (profit > maxProfit) {
            maxProfit = profit;
            topProduct = product;
        }
    }

    return topProduct;
}

function bottomProduct(array) {
    var minProfit = Number.POSITIVE_INFINITY;
    var bottomProduct;

    for (var i = 0; i < array.length; i++) {
        var product = Object.keys(array[i])[0];
        var profit = array[i][product];

        if (profit < minProfit) {
            minProfit = profit;
            bottomProduct = product;
        }
    }

    return bottomProduct;
}

function zeroProfitProduct(array) {
    var zeroProfit = Number.POSITIVE_INFINITY;
    var bottomProduct;

    for (var i = 0; i < array.length; i++) {
        var product = Object.keys(array[i])[0];
        var profit = array[i][product];

        if (profit < minProfit) {
            minProfit = profit;
            bottomProduct = product;
        }
    }

    return bottomProduct;
}

if (topProductValue > 0) {
   
    topProduct.innerHTML = topProductValue;
}

if (bottomProductValue > 0) {

    bottomProduct.innerHTML = bottomProductValue;
}
