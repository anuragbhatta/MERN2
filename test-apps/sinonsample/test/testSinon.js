var sinon = require('sinon');
var expect = require("chai").expect;
var mongoose = require('mongoose');
var controller = require('../server/index.js');
var studentschema = require('.././models/studentschema.js');

mStub = sinon.stub(studentschema, 'find');

describe('test data from the mongodb', function() {
    beforeEach(function(){
      mStub.withArgs({age:35}).returns({"name":"Amit","age":35,"location":{"city":"delhi","country":"india"}});
    });

    it('should retrieve data', function(done){
      expect(mStub({age:35}).name).to.be.equal("Amit");
      done();
    });
});
