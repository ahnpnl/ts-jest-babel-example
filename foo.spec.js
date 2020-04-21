"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foo_1 = require("./foo");
describe('Test optional chaining', function () {
    test("should work", function () {
        expect(foo_1.isStoreOwner({
            isStoreOwner: false,
        })).toEqual(false);
    });
});
