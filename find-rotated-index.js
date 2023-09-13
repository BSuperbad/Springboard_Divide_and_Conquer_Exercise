function findRotatedIndex(arr, num) {
    let firstIdx = 0;
    let lastIdx = arr.length - 1;

    while (firstIdx <= lastIdx) {
        const midIdx = Math.floor((firstIdx + lastIdx) / 2);

        if (arr[midIdx] === num) {
            return midIdx;
        }
        if (arr[firstIdx] <= arr[midIdx]) {
            if (arr[firstIdx] <= num && num < arr[midIdx]) {
                lastIdx = midIdx - 1;
            } else {
                firstIdx = midIdx + 1;
            }
        } else {
            if (arr[midIdx] < num && num <= arr[lastIdx]) {
                firstIdx = midIdx + 1;
            } else {
                lastIdx = midIdx - 1;
            }
        }


    }
    return -1;

}

module.exports = findRotatedIndex