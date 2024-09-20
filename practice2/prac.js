// 1

function findLongestWord(str) {
    let maxLen = 0;
    let words = str.split(" ");

    for (const word in words) {
        if (maxLen < word.length) {
            maxLen = word.length
        }
    }

    return maxLen;
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}