describe("сounter", function() {
    function makeTest() {
      var expected = 2;
      it("Количество вложенных объектов - " + expected, function() {
        assert.equal(counter(newObj), expected);
      });
    }
    makeTest();
});

describe("notMatch", function() {
    function makeTest() {
      var expected = 3;
      it("Количество несовпадений в объектах - " + expected, function() {
        assert.equal(notMatch(user1, user2), expected);
      });
    }
    makeTest();
});