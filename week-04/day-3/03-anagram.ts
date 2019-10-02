export class Anagram {
    checkAnagram (word1:string, word2:string){
        word1 = word1.split('').sort().join('');
        word2 = word2.split('').sort().join('');
        if (word1 === word2) {
            return true;
        } else {
            return false;
        }
    }
}