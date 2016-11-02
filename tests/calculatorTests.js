import assert from 'assert'
import { add } from '../src/calculator'

suite('When adding with string calculator', function() {
    suite('When separated by comma', function() {
        test('for an empty string it will return 0', function() {
            let string = '';

            let sum = add(string);

            assert.equal(sum, 0);
        })
        test('for string containing 1 it will return 1', function() {
            let string = '1';

            let sum = add(string);

            assert.equal(sum, 1);
        })
        test('for string containing 1,2 it will return 1 + 2', function() {
            let string = '1,2';

            let sum = add(string);

            assert.equal(sum, 1 + 2);
        })
        test('for string containing 1,2 and 88 it will return 1 + 2 + 88', function() {
            let string = '1,2,88';

            let sum = add(string);

            assert.equal(sum, 1 + 2 + 88);
        })
    })
    suite('When having different separators', function() {
        test('for string 1 new line 2,3 it will return 1 +2 +3', function() {
            let string = '1\n2,3';

            let sum = add(string);

            assert.equal(sum, 1 + 2 + 3);
        })
    })
})