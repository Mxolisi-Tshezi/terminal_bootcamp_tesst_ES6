import assert from "assert"
import fromWhere from "../fromWhere.js"
describe('fromWhere' , function(){

    it('if car registration number starts with CA return Cape Town' , function(){
        assert.equal(fromWhere('CA'), "Cape Town")
    })

 
    it('if car registration number starts with CJ return Paarl' , function(){
        assert.equal(fromWhere('CJ'), "Paarl")
    })

    it('if car registration number starts with CY return Bellville' , function(){
        assert.equal(fromWhere('CY'), "Bellville");
    })

    it('should return some other place' , function(){
        assert.equal(fromWhere('else'), 'Some other place!')
    })


});