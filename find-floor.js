function findFloor(arr, x) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    let floor = -1;

    while (firstIndex <= lastIndex) {
        const midIndex = Math.floor((firstIndex + lastIndex) / 2);

        if (arr[midIndex] === x) {
            return arr[midIndex];
        } else if (arr[midIndex] < x) {
            floor = arr[midIndex];
            firstIndex = midIndex + 1;
        } else {
            lastIndex = midIndex - 1;
        }
    }
    return floor;

}

module.exports = findFloor