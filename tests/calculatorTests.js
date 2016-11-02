import assert from 'assert'
import { add } from '../src/calculator'

suite('When I use string calculator', function() {
    test('for an empty string it will return 0', function() {
        let string = '';

        let sum  = add(string);

        assert.equal(sum, 0);
    })
    test('for string containing 1 it will return 1', function() {
        let string = 1;

        let sum = add(string);

        assert.equal(sum, 1);
    })
    test('for string containing 1,2 it will return 1 + 2', function() {
        let string = '1,2';

        let sum = add(string);

        assert.equal(sum, 1 + 2)
    })
    test('for string containing 1,5 and 44 it will return 1 + 5 + 44', function() {
        let string = '1,5,44';

        let sum = add(string);

        assert.equal(sum, 1 + 5 + 44);
    })
})