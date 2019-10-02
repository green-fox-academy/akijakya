import * as test from 'tape'
import { Apple } from './01-apples'
import { Sum } from './02-sum'
import { Anagram } from './03-anagram'
import { Letters } from './04-count-letters'
import { fibonacciSequence } from './05-fibonacci'

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

test ('count letters in a word', t => {
    let letters = new Letters;
    let word:string = 'apples';
    const actual = JSON.stringify(letters.countLetters(word));
    const expected = JSON.stringify({ a: 1, p: 2, l: 1, e: 1, s: 1 });

    t.equal(actual, expected, 'should return an object with corresponding key-value pairs');
    t.end();
});

test ('member of the fibonacci sequence at a given index', t => {
    t.equal(fibonacciSequence(10), 34, 'should return 34');
    t.end();
});

test ('member of the fibonacci sequence at a given index', t => {
    t.throws(fibonacciSequence(-1), Error, 'should return 34');
    t.end();
});