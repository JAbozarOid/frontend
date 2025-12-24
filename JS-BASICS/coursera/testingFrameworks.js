/**
 * JavaScript testing frameworks
 * JEST
 */

function concatTwoStrings(firstname, lastname) {
    return firstname + lastname;
}
console.log(concatTwoStrings("abozar","ragib"));
console.log(concatTwoStrings(1,2)); // output : --> 3 --> it is not the one we expected!

module.exports = concatTwoStrings;
/**
 * type of testing
 * 1- end-to-end testing : when product release and testers are not developers
 * 2- integration testing : how separate parts of the app works together : React Testing library / enzyme
 * 3- unit testing : testing the smallest part of the source code like functions or method
 */

/**
 * Jest is a JavaScript testing framework. It's often used for testing code like React, a JavaScript library maintained by Meta and a community of individual developers and companies.
 * libraries for JavaScript testing : Jasmine, Mocha, Karma, and qUnit.
 * Snapshot testing : to verify that there are no regressions in the DOM
 */

/**
 * npm init -y : create a package.json file for our current folder
 * npm install --save-dev jest
 * in package.json file change the below
 * "scripts": {
 *     "test": "jest"
 *   },
 */