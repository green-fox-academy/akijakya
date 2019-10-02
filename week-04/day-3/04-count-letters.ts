export class Letters {
    public countLetters (word:string) {
        let letters = {};
        let wordLetters:string [] = word.split('');
        wordLetters.forEach(function (e) {
            if (letters[e] === undefined) {
                letters[e] = 1;
            } else {
                letters[e] += 1;
            }
        });
        return letters;
    }
}