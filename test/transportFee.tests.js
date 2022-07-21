import assert from "assert"
import transportFee from "../transportFee.js"
describe('transportFee' , function(){
    it('should return the right morning shift price ' , function(){
        assert.equal(transportFee('morning'), 'R20');
    })

    it('should return the right afternoon shift price' , function(){
        assert.equal(transportFee('afternoon'), 'R10')
    })

   
    it('should return free for any other shift' , function(){
        assert.equal(transportFee('night'), 'free')
    })


});