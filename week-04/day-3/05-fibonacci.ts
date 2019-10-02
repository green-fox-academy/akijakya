export function fibonacciSequence (index:number):number {
    let startArray:number [] = [0, 1];
    if (index > 0) {
        for (let i:number = 0; i < index-2; i++) {
            startArray.push(startArray[i] + startArray[i+1]);
        }
        return startArray[index-1];
    } else {
        throw new Error ('invalid number');
    }
}
