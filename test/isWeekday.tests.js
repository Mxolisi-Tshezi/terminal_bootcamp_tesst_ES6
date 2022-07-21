import assert from "assert"
import isWeekday from "../isWeekday.js"
describe('isWeekday' , function(){
    it('should return true if day is a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
});