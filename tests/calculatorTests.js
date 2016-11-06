import assert from 'assert'
import { add } from '../src/calculator'

suite('When I use string calcutaor', function() {
    test('empty string should result in 0', function() {
        let string = '';

        let sum = add(string);

        assert.equal(0, sum);
    })
    test('string 1 should result in 1', function() {
        let string = '1';

        let sum = add(string);

        assert.equal(1, sum);
    })
    test('string 34,56 should result in 34 + 56', function() {
        let string = '34,56';

        let sum = add(string);

        assert.equal(34 + 56, sum);
    })
    test('string 34,56,92 should result in 34 + 56 + 92', function() {
        let string = '34,56,92';

        let sum = add(string);

        assert.equal(34 + 56 + 92, sum);
    })
    test('string 1\n2, 3 should result in 1 + 2 + 3', function() {
        let string = '1\n2,3';

        let sum = add(string);

        assert.equal(1 + 2 + 3, sum);
    })
    test('string //;\n1;2 should return 1 + 2', function() {
        let string = '//;\n1;2';

        let sum = add(string);

        assert.equal(1 + 2, sum);
    })

})