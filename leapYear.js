function findLeapYears(start, end){
    let result = []
    for (let i = start; i <= end; i++) {
        if (i % 4 === 0) {
            result.push(i)
        }
    }
    return result
}
console.log(findLeapYears(1970,2036))