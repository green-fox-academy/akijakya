import * as test from 'tape'
import { Apple } from './01-apples'
import { Sum } from './02-sum'
import { Anagram } from './03-anagram'

test ('apples', t => {
    let apple = new Apple;
    const actual = apple.getApple();
    const expected = 'apple';

    t.equal(actual, expected, 'should return apple');
    t.end();
});

test ('sum with multiple elements', t => {
    let sum = new Sum;
    let integers:number [] = [2, 4, 7, 2];
    const actual = sum.sum(integers);
    const expected = 15;

    t.equal(actual, expected, 'should return 15');
    t.end();
});

test ('sum with empty', t => {
    let sum = new Sum;
    let integers:number [] = [];
    const actual = sum.sum(integers);
    const expected = 0;

    t.equal(actual, expected, 'should return 0');
    t.end();
});

test ('sum with one element', t => {
    let sum = new Sum;
    let integers:number [] = [2];
    const actual = sum.sum(integers);
    const expected = 2;

    t.equal(actual, expected, 'should return 2');
    t.end();
});

test ('anagrams with actual anagrams', t => {
    let anagram = new Anagram;
    let word1:string = 'gyomorrontás';
    let word2:string = 'toronymorgás'
    const actual = anagram.checkAnagram(word1, word2);
    const expected = true;

    t.equal(actual, expected, 'should return true');
    t.end();
});