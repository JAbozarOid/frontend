const concatStrings = require("./testingFrameworks");

function testString(returnTheConcatStrings, param2) {
    expect(concatStrings("hello","world")).toBe('hello world');
}

testString('return the concat strings',()=>{

})