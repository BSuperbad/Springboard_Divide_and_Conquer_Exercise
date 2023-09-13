function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            firstOccurrence = mid;
            left = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return firstOccurrence;
}

function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            firstOccurrence = mid;
            left = mid + 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return firstOccurrence;
}

function sortedFrequency(arr, num) {
    const firstIdx = findFirst(arr, num);

    if (firstIdx === -1) {
        return 0;
    }
    const lastIndex = findLast(arr, num);
    return lastIndex - firstIdx + 1;

}

module.exports = sortedFrequency