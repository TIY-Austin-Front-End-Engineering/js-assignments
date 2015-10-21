window.Bar = (function() {

  function Bar() {

  }

  Bar.prototype = {

    //----

    squared: function(num) {
      return Math.pow(num, 2);
    },

    //----

    cubed: function(num) {
      return Math.pow(num, 3);
    },

    //----

    exponentOf: function(exponent) {
      return function(num) {
        return Math.pow(num, exponent);
      };
    },

    //----

    reverseString: function(str) {
      return str.split("").reverse().join("");
    },

    //----

    cipher: function(str) {
      return _.map(str.split(""), function(c){
        return String.fromCharCode(c.charCodeAt()+100);
      }).join("");
    },

    //----

    decipher: function(str) {
      return _.map(str.split(""), function(c){
        return String.fromCharCode(c.charCodeAt()-100);
      }).join("");
    },

    //----

    rot13: function(sentence) {
      var chars, shifted;

      chars = sentence.split("");

      shifted = _.map(chars, function(char) {

        var code = char.charCodeAt();

        // Uppercase
        if (code >= 65 && code <= 90) {
          code += 13;
          if (code > 90) {
            code = 64 + code - 90;
          }
        }

        // Lowercase
        else if (code >= 97 && code <= 122) {
          code += 13;
          if (code > 122) {
            code = 96 + code - 122;
          }
        }

        return String.fromCharCode(code);

      });

      return shifted.join("");
    }

    //----

  };

  return Bar;

})();