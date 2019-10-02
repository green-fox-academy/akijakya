export class Sum {
    public sum (integers:number[]):number {
        let sum:number = 0;
        integers.forEach(e => sum += e);
        return sum;
    }
}