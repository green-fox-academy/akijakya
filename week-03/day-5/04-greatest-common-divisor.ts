// Find the greatest common divisor of two numbers using recursion.

function greatestCommonDivisor (num1:number, num2:number):number {
    let n:number = 0;
    if (num1 <= num2) {
        n = num1;
    } else {
        n = num2;
    }

    if (num1%n !== 0 && num2%n !== 0) {
        
    }
}

greatestCommonDivisor (12, 36);