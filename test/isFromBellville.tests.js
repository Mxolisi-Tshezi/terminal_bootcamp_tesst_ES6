import assert from "assert"
import isFromBellville from "../isFromBellville.js"
describe('isFromBellville' , function(){
    it('should return true if registration number is from Bellville' , function(){
        assert.equal(isFromBellville('CY 123'),true);
    });
    it('should return false if car registration number is not from Bellville' , function(){
        assert.equal(isFromBellville('CA 123'),false);
    });
});