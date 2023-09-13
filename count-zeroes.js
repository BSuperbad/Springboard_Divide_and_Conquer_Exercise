// [0,0,0,0,0,1,1,1,1]

function countZeroes(array) {

    let firstIndex = 0;
    let lastIndex = array.length - 1;

    while (firstIndex <= lastIndex) {
        let midIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (array[midIndex] === 1) {
            firstIndex = midIndex + 1;
        } else {
            lastIndex = midIndex - 1;
        }
    }
    return array.length - firstIndex;
}




module.exports = countZeroes