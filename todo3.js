function rBinarySearch(arr, num) {
    var holder = Math.floor(arr.length / 2);
    if (arr[holder] == num) {
        return true;
    } else if (num < arr[holder] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, holder), num);
    } else if (num > arr[holder] && arr.length > 1) {
        return rBinarySearch(arr.slice(holder, arr.length), num);
    } else {
        return false
    }
}
// console.log(rBinarySearch([1, 2, 3], 1));

function rGCF(x, y) {
    // this is the method of finding gcd
    if (x == y) {
        return x;
    }
    if (x > y) {
        return rGCF(x - y, y);
    }
    if (x < y) {
        return rGCF(x, y - x);
    }
}

// console.log(rGCF(7, 13));
// console.log(rGCF(32, 48));

function GCF(x, y) {
    if (x == y) {
        return x;
    }
    if (x > y) {
        if ((x / y) % 1 === 0) {
            return y;
        } else {
            return GCF(x - y, y);
        }
    }
    if (x < y) {
        if ((x / y) % 1 === 0) {
            return y;
        } else {
            return GCF(x, y -
                x);
        }
    }
}
console.log(GCF(123456, 987654));