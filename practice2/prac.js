
function findLongestWord(input) {
    let maxLen = 0;
    let maxWord = '';
    let words = input.split(" ");
    console.log(words);

    for (let i = 0; i < words.length; i++) {
        if (maxLen < words[i].length) {
            maxLen = words[i].length;
            maxWord = words[i];
        }
    }

    return maxWord;
}

console.log(findLongestWord("Скушай ещё этих французских булок да выпей чаю."))

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}

console.log(isSorted([1, 2, 3, 4, 5]))
console.log(isSorted([1, 2, 1, 4]))
console.log(isSorted([1, 2, 2, 4]))