const {TestClass} = require("./test-class")

describe('TestClass...', () => {
    test('', () => {
        expect(new TestClass().aMethod()).toBe(true);
    })
})