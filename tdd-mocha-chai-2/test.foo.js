describe("Foo", function() {
  var foo;

  beforeEach(function() {
    foo = new Foo();
  });

  describe("plusOne", function() {

    it("is a method", function() {
      expect( typeof foo.plusOne ).eq("function");
    });

    it("adds one to a number", function() {
      expect( foo.plusOne(2) ).eq(3);
    });

  });

  describe("sortArray", function() {

    it("returns a sorted copy of an array", function() {
      var unsorted = ["b","c","a","x"];
      var sorted = foo.sortArray(unsorted);

      // The values should be sorted
      expect(sorted).deep.eq(["a","b","c","x"]);

      // The return array should be a copy
      expect(sorted).not.eq(unsorted);
    });

  });

  describe("hasValue", function() {

    it("determines if an array contains a value", function() {
      var materials = ["metal", "plastic", "wood", "glass"];
      var elements  = ["mercury", "iron", "carbon", "gold"];

      expect( foo.hasValue(materials, "wood") ).eq( true  );
      expect( foo.hasValue(materials, "gold") ).eq( false );

      expect( foo.hasValue(elements, "plastic") ).eq( false );
      expect( foo.hasValue(elements, "mercury") ).eq( true  );
    });

  });

  describe("greet", function() {

    it("greets a specified name", function() {
      expect( Foo.greet("JavaScript") ).eq("Hello, JavaScript!");
      expect( Foo.greet("Testing")    ).eq("Hello, Testing!");
    });

  });

});