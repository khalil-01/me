function calculateSumAndAverage(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    const average = total / numbers.length;
    return { total, average };
}

const numbersArray = [10, 20, 30, 40];
const result = calculateSumAndAverage(numbersArray);
console.log(result);

function removeDuplicates(arr) {
    const uniqueValues = [...new Set(arr)];
    return uniqueValues;
}

const stringArray = ["apple", "banana", "apple", "orange", "banana"];
const uniqueArray = removeDuplicates(stringArray);
console.log(uniqueArray); 