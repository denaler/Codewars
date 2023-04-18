function towerBuilder(nFloors) {
    var flo = ["*"];
    if (flo.length == nFloors) {
        return flo;
    } else {
        do {
            flo.push(flo[flo.length - 1]);
            for (let i = 0; flo.length - i > 1; i++) {
                flo[i] = " ".concat(flo[i]);
                flo[i] = flo[i].concat(" ");
            }
            flo[flo.length -1] = "*".concat(flo[flo.length -1]);
            flo[flo.length -1] = flo[flo.length -1].concat("*");
        } while (nFloors > flo.length);
        return flo;
    }
}


/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] 
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
}); */
