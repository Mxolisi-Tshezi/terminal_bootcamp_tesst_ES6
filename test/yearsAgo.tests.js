import assert from "assert"
import yearsAgo from "../yearsAgo.js"
describe('yearsAgo' , function(){
    it('should return how many years ago that was' , function(){
        assert.equal(yearsAgo('1999'), 23);
    })
    
    it('should return how long ago it was' , function(){
        assert.equal(yearsAgo('1998'), 24)
    })

});