var FILL_ME_IN;
describe("About Arrays", function() {

    //We shall contemplate truth by testing reality, via spec expectations.
    it("should create arrays", function() {
        var emptyArray = [];
        expect(typeof(emptyArray)).to.equal(FILL_ME_IN);
        expect(emptyArray.length).to.equal(FILL_ME_IN);

        var multiTypeArray = [0, 1, "two",
            function() {
                return 3;
            }, {
                value1: 4,
                value2: 5
            },
            [6, 7]
        ];
        expect(multiTypeArray[0]).to.equal(FILL_ME_IN);
        expect(multiTypeArray[2]).to.equal(FILL_ME_IN);
        expect(multiTypeArray[3]()).to.equal(FILL_ME_IN);
        expect(multiTypeArray[4].value1).to.equal(FILL_ME_IN);
        expect(multiTypeArray[4]["value2"]).to.equal(FILL_ME_IN);
        expect(multiTypeArray[5][0]).to.equal(FILL_ME_IN);
    });

    it("should understand array literals", function() {
        var array = [];
        expect(array.toString()).to.equal(FILL_ME_IN);

        array[0] = 1;
        expect(array.toString()).to.equal(FILL_ME_IN);

        array[1] = 2;
        expect(array).to.equal([1, FILL_ME_IN]);

        array.push(3);
        expect(array).to.equal(FILL_ME_IN);
    });

    it("should understand array length", function() {
        var fourNumberArray = [1, 2, 3, 4];

        expect(fourNumberArray.length).to.equal(FILL_ME_IN);
        fourNumberArray.push(5, 6);
        expect(fourNumberArray.length).to.equal(FILL_ME_IN);

        var tenEmptyElementArray = new Array(10);
        expect(tenEmptyElementArray.length).to.equal(FILL_ME_IN);

        tenEmptyElementArray.length = 5;
        expect(tenEmptyElementArray.length).to.equal(FILL_ME_IN);
    });

    it("should slice arrays", function() {
        var array = ["peanut", "butter", "and", "jelly"];

        expect(array.slice(0, 1).toString()).to.equal(FILL_ME_IN);
        expect(array.slice(0, 2).toString()).to.equal(FILL_ME_IN);
        expect(array.slice(2, 2).toString()).to.equal(FILL_ME_IN);
        expect(array.slice(2, 20).toString()).to.equal(FILL_ME_IN);
        expect(array.slice(3, 0).toString()).to.equal(FILL_ME_IN);
        expect(array.slice(3, 100).toString()).to.equal(FILL_ME_IN);
        expect(array.slice(5, 1).toString()).to.equal(FILL_ME_IN);
    });

    it("should know array references", function() {
        var array = ["zero", "one", "two", "three", "four", "five"];

        function passedByReference(refArray) {
            refArray[1] = "changed in function";
        }
        passedByReference(array);
        expect(array[1]).to.equal(FILL_ME_IN);

        var assignedArray = array;
        assignedArray[5] = "changed in assignedArray";
        expect(array[5]).to.equal(FILL_ME_IN);

        var copyOfArray = array.slice();
        copyOfArray[3] = "changed in copyOfArray";
        expect(array[3]).to.equal(FILL_ME_IN);
    });

    it("should push and pop", function() {
        var array = [1, 2];
        array.push(3);

        expect(array.toString()).to.equal(FILL_ME_IN);

        var poppedValue = array.pop();
        expect(poppedValue).to.equal(FILL_ME_IN);
        expect(array.toString()).to.equal(FILL_ME_IN);
    });

    it("should know about shifting arrays", function() {
        var array = [1, 2];

        array.unshift(3);
        expect(array.toString()).to.equal(FILL_ME_IN);

        var shiftedValue = array.shift();
        expect(shiftedValue).to.equal(FILL_ME_IN);
        expect(array.toString()).to.equal(FILL_ME_IN);
    });
});
