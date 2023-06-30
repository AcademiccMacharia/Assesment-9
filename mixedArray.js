let mixedArray = [2, "11", 3, "a2", false, 5, 7, 1];
let Sum = 0;
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        Sum += mixedArray[i];
    }
}

console.log(`Sum all numbers of the said array: ${Sum}`)

