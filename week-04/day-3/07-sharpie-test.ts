import * as test from 'tape';
import { Sharpie } from './../../week-03/day-3/04-sharpie';

test ('sharpie use method', t => {
    let sharpie = new Sharpie ('blue', 4);
    const actual = sharpie.use(30);
    const expected = 70;

    t.equal(actual, expected, 'should return 70');
    t.end();
});
