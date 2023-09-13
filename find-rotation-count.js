function findRotationCount(arr) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        if (arr[firstIndex] <= arr[lastIndex]) {
            return firstIndex;
        }

        const midIndex = Math.floor((firstIndex + lastIndex) / 2);
        const nextIndex = (midIndex + 1) % arr.length;
        const prevIndex = (midIndex + arr.length - 1) % arr.length;

        if (arr[midIndex] <= arr[nextIndex] && arr[midIndex] <= arr[prevIndex]) {
            return midIndex;
        }
        if (arr[midIndex] <= arr[lastIndex]) {
            lastIndex = midIndex - 1;
        } else if (arr[midIndex] >= arr[firstIndex]) {
            firstIndex = midIndex + 1;
        }
    }
    return -1;
}

module.exports = findRotationCount