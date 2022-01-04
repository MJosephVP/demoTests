describe("rangeInArray", function () {
  it("range_in_array_input_1", function () {
    // Failure message:
    // expected rangeInArray([1,2,3,4],0,2) to be 6
    expect(rangeInArray([1, 2, 3, 4], 0, 2)).toBe(6);
  });
  it("range_in_array_input_2", function () {
    // Failure message:
    // expected rangeInArray([1,2,3,4],0,3) to be 10
    expect(rangeInArray([1, 2, 3, 4], 0, 3)).toBe(10);
  });
  it("range_in_array_input_3", function () {
    // Failure message:
    // expected rangeInArray([1,2,3,4],1) to be 9
    expect(rangeInArray([1, 2, 3, 4], 1)).toBe(9);
  });
  it("range_in_array_input_4", function () {
    // Failure message:
    // expected rangeInArray([1,2,3,4]) to be 10
    expect(rangeInArray([1, 2, 3, 4])).toBe(10);
  });
  it("range_in_array_input_5", function () {
    // Failure message:
    // expected rangeInArray([1,2,3,4],0,100) to be 10
    expect(rangeInArray([1, 2, 3, 4], 0, 100)).toBe(10);
  });
  it("range_in_array_input_6", function () {
    // Failure message:
    // expected rangeInArray([],0,1) to be 0
    expect(rangeInArray([], 0, 1)).toBe(0);
  });
});
describe("sameFrequency", function () {
  it("same_frequency_input_1", function () {
    // Failure message:
    // expected sameFrequency(551122,221515) to be true
    expect(sameFrequency(551122, 221515)).toBe(true);
  });
  it("same_frequency_input_2", function () {
    // Failure message:
    // expected sameFrequency(321142, 3212215) to be false
    expect(sameFrequency(321142, 3212215)).toBe(false);
  });
  it("same_frequency_input_3", function () {
    // Failure message:
    // expected sameFrequency(1212, 2211) to be true
    expect(sameFrequency(1212, 2211)).toBe(true);
  });
});
describe("take", function () {
  it("take_input_1", function () {
    // Failure message:
    // expected take([1, 2, 3]) to equal [1]
    expect(take([1, 2, 3])).toEqual([1]);
  });
  it("take_input_2", function () {
    // Failure message:
    // expected take([1, 2, 3], 1) to equal [1]
    expect(take([1, 2, 3], 1)).toEqual([1]);
  });
  it("take_input_3", function () {
    // Failure message:
    // expected take([1, 2, 3], 2) to equal [1, 2]
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });
  it("take_input_4", function () {
    // Failure message:
    // expected take([1, 2, 3], 5) to equal [1, 2, 3]
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  it("take_input_5", function () {
    // Failure message:
    // expected take([1, 2, 3], 0) to equal []
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
});
describe("inRange", function () {
  it("in_range_input_1", function () {
    // Failure message:
    // expected inRange(3, 2, 4) to be true
    expect(inRange(3, 2, 4)).toBe(true);
  });
  it("in_range_input_2", function () {
    // Failure message:
    // expected inRange(0, -10, 10) to be true
    expect(inRange(0, -10, 10)).toBe(true);
  });
  it("in_range_input_3", function () {
    // Failure message:
    // expected inRange(5, 0, 3) to be false
    expect(inRange(5, 0, 3)).toBe(false);
  });
  it("in_range_input_4", function () {
    // Failure message:
    // expected inRange(4, 8) to be true
    expect(inRange(4, 8)).toBe(true);
  });
  it("in_range_input_5", function () {
    // Failure message:
    // expected inRange(4, 2) to be false
    expect(inRange(4, 2)).toBe(false);
  });
  it("in_range_input_6", function () {
    // Failure message:
    // expected inRange(2, 2) to be false
    expect(inRange(2, 2)).toBe(false);
  });
  it("in_range_input_7", function () {
    // Failure message:
    // expected inRange(1.2, 2) to be true
    expect(inRange(1.2, 2)).toBe(true);
  });
  it("in_range_input_8", function () {
    // Failure message:
    // expected inRange(5.2, 4) to be false
    expect(inRange(5.2, 4)).toBe(false);
  });
  it("in_range_input_9", function () {
    // Failure message:
    // expected inRange(5, 6, 4) to be true
    expect(inRange(5, 6, 4)).toBe(true);
  });
  it("in_range_input_10", function () {
    // Failure message:
    // expected inRange(-3, -2, -6) to be true
    expect(inRange(-3, -2, -6)).toBe(true);
  });
  it("in_range_input_11", function () {
    // Failure message:
    // expected inRange(10, 100, -5) to be true
    expect(inRange(10, 100, -5)).toBe(true);
  });
  it("in_range_input_12", function () {
    // Failure message:
    // expected inRange(10, 10, -5) to be false
    expect(inRange(10, 10, -5)).toBe(false);
  });
});
describe("padEnd", function () {
  it("pad_end_input_1", function () {
    // Failure message:
    // expected padEnd('abc', 6) to equal 'abc   '
    expect(padEnd("abc", 6)).toEqual("abc   ");
  });
  it("pad_end_input_2", function () {
    // Failure message:
    // expected padEnd('hi', 10) to equal 'hi        '
    expect(padEnd("hi", 10)).toEqual("hi        ");
  });
  it("pad_end_input_3", function () {
    // Failure message:
    // expected padEnd('hello', 5) to equal 'hello'
    expect(padEnd("hello", 5)).toEqual("hello");
  });
  it("pad_end_input_4", function () {
    // Failure message:
    // expected padEnd('hello', 1) to equal 'hello'
    expect(padEnd("hello", 1)).toEqual("hello");
  });
  it("pad_end_input_5", function () {
    // Failure message:
    // expected padEnd('abc', 6, 'xyz') to equal 'abcxyz'
    expect(padEnd("abc", 6, "xyz")).toEqual("abcxyz");
  });
  it("pad_end_input_6", function () {
    // Failure message:
    // expected padEnd('hello', 11, ' world') to equal 'hello world'
    expect(padEnd("hello", 11, " world")).toEqual("hello world");
  });
  it("pad_end_input_7", function () {
    // Failure message:
    // expected padEnd('hello', 5, ' world') to equal 'hello'
    expect(padEnd("hello", 5, " world")).toEqual("hello");
  });
  it("pad_end_input_8", function () {
    // Failure message:
    // expected padEnd('abc', 5, 'xyz') to equal 'abcxy'
    expect(padEnd("abc", 5, "xyz")).toEqual("abcxy");
  });
  it("pad_end_input_9", function () {
    // Failure message:
    // expected padEnd('abc', 10, 'xyz') to equal 'abcxyzxyzx'
    expect(padEnd("abc", 10, "xyz")).toEqual("abcxyzxyzx");
  });
  it("pad_end_input_10", function () {
    // Failure message:
    // expected padEnd('hello', 7, ' world) to equal 'hello w'
    expect(padEnd("hello", 7, " world")).toEqual("hello w");
  });
  it("pad_end_input_11", function () {
    // Failure message:
    // expected padEnd('hello', 25, ' world') to equal 'hello world world world w'
    expect(padEnd("hello", 25, " world")).toEqual("hello world world world w");
  });
});
describe("drop", function () {
  it("drop_input_1", function () {
    // Failure message:
    // expected drop([1,2,3]) to equal [2,3]
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  it("drop_input_2", function () {
    // Failure message:
    // expected drop([1,2,3], 2) to equal [3]
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
  it("drop_input_3", function () {
    // Failure message:
    // expected drop([1,2,3], 10) to equal []
    expect(drop([1, 2, 3], 10)).toEqual([]);
  });
  it("drop_input_4", function () {
    // Failure message:
    // expected drop([1,2,3], 0) to equal [1,2,3]
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  it("drop_doesnt_mutate_input", function () {
    // Failure message:
    // expected drop not to change the value of the input array
    var arr = [1, 2, 3];
    drop(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("linearSearch", function () {
  it("linear_search_input_1", function () {
    // Failure message:
    // expected linearSearch([1,2,3,4,5],2) to be 1
    expect(linearSearch([1, 2, 3, 4, 5], 2)).toBe(1);
  });
  it("linear_search_input_2", function () {
    // Failure message:
    // expected linearSearch([1,2,3,4,5],3) to be 2
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });
  it("linear_search_input_3", function () {
    // Failure message:
    // expected linearSearch([1,2,3,4,5],5) to be 4
    expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
  it("linear_search_input_4", function () {
    // Failure message:
    // expected linearSearch([1,2,3,4,5],6) to be -1
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
});
describe("head", function () {
  it("head_input_1", function () {
    // Failure message:
    // expected head([1, 2, 3]) to be 1
    expect(head([1, 2, 3])).toBe(1);
  });
  it("head_input_2", function () {
    // Failure message:
    // expected head([{name: "Elie"}, {name: "Matt"}, {name: "Michael"}])) to equal {name: "Elie"}
    expect(
      head([{ name: "Elie" }, { name: "Matt" }, { name: "Michael" }])
    ).toEqual({ name: "Elie" });
  });
  it("head_input_3", function () {
    // Failure message:
    // expected head([]) to be undefined
    expect(head([])).toBe(undefined);
  });
});
describe("isNil", function () {
  it("is_nil_input_1", function () {
    // Failure message:
    // expected isNil(null) to be true
    expect(isNil(null)).toBe(true);
  });
  it("is_nil_input_2", function () {
    // Failure message:
    // expected isNil(NaN) to be false
    expect(isNil(NaN)).toBe(false);
  });
  it("is_nil_input_3", function () {
    // Failure message:
    // expected isNil([]) to be false
    expect(isNil([])).toBe(false);
  });
  it("is_nil_input_4", function () {
    // Failure message:
    // expected isNil(false) to be false
    expect(isNil(false)).toBe(false);
  });
  it("is_nil_input_5", function () {
    // Failure message:
    // expected isNil(undefined) to be true
    expect(isNil(undefined)).toBe(true);
  });
  it("is_nil_input_6", function () {
    // Failure message:
    // expected isNil() to be true
    expect(isNil()).toBe(true);
  });
});
describe("isOddString", function () {
  it("is_odd_string_input_1", function () {
    // Failure message:
    // expected isOddString('a') to be true
    expect(isOddString("a")).toBe(true);
  });
  it("is_odd_string_input_2", function () {
    // Failure message:
    // expected isOddString('aaaa') to be false
    expect(isOddString("aaaa")).toBe(false);
  });
  it("is_odd_string_input_3", function () {
    // Failure message:
    // expected isOddString('amazing') to be true
    expect(isOddString("amazing")).toBe(true);
  });
  it("is_odd_string_input_4", function () {
    // Failure message:
    // expected isOddString('veryfun') to be true
    expect(isOddString("veryfun")).toBe(true);
  });
  it("is_odd_string_input_5", function () {
    // Failure message:
    // expected isOddString('veryfunny') to be false
    expect(isOddString("veryfunny")).toBe(false);
  });
});
describe("pick", function () {
  it("pick_input_1", function () {
    // Failure message:
    // expected pick({ 'a': 1, 'b': 2, 'c': 3 }, ['a', 'c']) to equal { 'a': 1, 'c': 3 }
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
  it("pick_input_2", function () {
    // Failure message:
    // expected pick({ 'a': 1, 'b': 2, 'c': 3 }, ['b', 'c']) to equal { 'b': 2, 'c': 3 }
    expect(pick({ a: 1, b: 2, c: 3 }, ["b", "c"])).toEqual({ b: 2, c: 3 });
  });
  it("pick_input_3", function () {
    // Failure message:
    // expected pick({ 'a': 1, 'b': 2, 'c': 3 }, ['a', 'd']) to equal { 'a': 1 }
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "d"])).toEqual({ a: 1 });
  });
  it("pick_input_4", function () {
    // Failure message:
    // expected pick({ 'a': 1, 'b': 2, 'c': 3 }, ['d', 'e', 'f']) to equal { }
    expect(pick({ a: 1, b: 2, c: 3 }, ["d", "e", "f"])).toEqual({});
  });
});
describe("flatten", function () {
  it("flatten_input_1", function () {
    // Failure message:
    // expected flatten([1,2,3,[4,5]]) to equal [1,2,3,4,5]
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });
  it("flatten_input_2", function () {
    // Failure message:
    // expected flatten([[1], [2]]) to equal([1, 2])
    expect(flatten([[1], [2]])).toEqual([1, 2]);
  });
  it("flatten_input_3", function () {
    // Failure message:
    // expected flatten([1, [2, [3, [4]], 5]]) to equal [1, 2, [3, [4]], 5]
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });
});
describe("tap", function () {
  it("tap_input_1", function () {
    expect(tap([1, 2, 3], function (array) {
      array.pop();
    }).reverse()).toEqual([2, 1]); // [2,1]
  })

  it("tap_input_2", function () {
    expect(tap([1, 2, 3], function (array) {
      array[0] = 10;
      array[1] = -10;
      return "cool";
    })).toEqual([10, -10, 3])
  })
  it("tap_input_3", function () {
    expect(tap(["a", "b", "c"], function (array) {
      return array[0];
    })).toEqual(["a", "b", "c"])
  })
});
describe("clamp", function () {
  it("clamp_input_1", function () {
    // Failure message:
    // expected clamp(-10, -5, 6) to be -5
    expect(clamp(-10, -5, 6)).toBe(-5);
  });
  it("clamp_input_2", function () {
    // Failure message:
    // expected clamp(10, -2, 5) to be 5
    expect(clamp(10, -2, 5)).toBe(5);
  });
  it("clamp_input_3", function () {
    // Failure message:
    // expected clamp(2, -5, 5) to be 2
    expect(clamp(2, -5, 5)).toBe(2);
  });
  it("clamp_input_4", function () {
    // Failure message:
    // expected clamp(-2, -5, 5) to be -2
    expect(clamp(-2, -5, 5)).toBe(-2);
  });
  it("clamp_input_5", function () {
    // Failure message:
    // expected clamp(0, 0, 0) to be 0
    expect(clamp(0, 0, 0)).toBe(0);
  });
});
describe("omit", function () {
  it("omit_input_1", function () {
    // Failure message:
    // expected omit({ 'a': 1, 'b': 2, 'c': 3 }, ['a', 'c']) to equal { 'b': 2 }
    expect(omit({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ b: 2 });
  });
  it("omit_input_2", function () {
    // Failure message:
    // expected omit({ 'a': 1, 'b': 2, 'c': 3 }, ['b', 'c']) to equal { 'a': 1 }
    expect(omit({ a: 1, b: 2, c: 3 }, ["b", "c"])).toEqual({ a: 1 });
  });
  it("omit_input_3", function () {
    // Failure message:
    // expected omit({ 'a': 1, 'b': 2, 'c': 3 }, ['a', 'd']) to equal { 'b': 2, 'c': 3}
    expect(omit({ a: 1, b: 2, c: 3 }, ["a", "d"])).toEqual({ b: 2, c: 3 });
  });
  it("omit_input_4", function () {
    // Failure message:
    // expected omit({ 'a': 1, 'b': 2, 'c': 3 }, ['d', 'e', 'f']) to equal { 'a': 1, 'b': 2, 'c': 3}
    expect(omit({ a: 1, b: 2, c: 3 }, ["d", "e", "f"])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
});
describe("createMatrix", function () {
  it("create_matrix_input_1", function () {
    // Failure message:
    // expected createMatrix(2,2) to equal [[0,0],[0,0]]
    expect(createMatrix(2, 2)).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });
  it("create_matrix_input_2", function () {
    // Failure message:
    // expected createMatrix(3,2) to equal [[0,0,0],[0,0]]
    expect(createMatrix(3, 2)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  it("create_matrix_input_3", function () {
    // Failure message:
    // expected createMatrix(3,4) to equal [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    expect(createMatrix(3, 4)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  it("create_matrix_input_4", function () {
    // Failure message:
    // expected createMatrix(5,4) to equal [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    expect(createMatrix(5, 4)).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});
describe("fill", function () {
  it("fill_input_1", function () {
    // Failure message:
    // expected fill([1,2,3],"y") to equal ["y","y","y"]
    expect(fill([1, 2, 3], "y")).toEqual(["y", "y", "y"]);
  });
  it("fill_input_2", function () {
    // Failure message:
    // expected fill([undefined, undefined, null, false],"1") to equal ["1","1","1","1"]
    expect(fill([undefined, undefined, null, false], "1")).toEqual([
      "1",
      "1",
      "1",
      "1",
    ]);
  });
  it("fill_input_3", function () {
    // Failure message:
    // expected fill([2,3,1,95],4) to equal [4,4,4,4]
    expect(fill([2, 3, 1, 95], 4)).toEqual([4, 4, 4, 4]);
  });
  it("fill_input_4", function () {
    // Failure message:
    // expected fill([1,2,3,4,5],5) to equal [5,5,5,5,5]
    expect(fill([1, 2, 3, 4, 5], 5)).toEqual([5, 5, 5, 5, 5]);
  });
});
describe("isPrime", function () {
  it("is_prime_input_1", function () {
    // Failure message:
    // expect isPrime(3) to be true
    expect(isPrime(3)).toBe(true);
  });
  it("is_prime_input_2", function () {
    // Failure message:
    // expect isPrime(13) to be true
    expect(isPrime(13)).toBe(true);
  });
  it("is_prime_input_3", function () {
    // Failure message:
    // expect isPrime(24) to be false
    expect(isPrime(24)).toBe(false);
  });
  it("is_prime_input_4", function () {
    // Failure message:
    // expect isPrime(55) to be false
    expect(isPrime(55)).toBe(false);
  });
  it("is_prime_input_5", function () {
    // Failure message:
    // expect isPrime(1299720) to be false
    expect(isPrime(1299720)).toBe(false);
  });
  it("is_prime_input_6", function () {
    // Failure message:
    // expect isPrime(1299721) to be true
    expect(isPrime(1299721)).toBe(true);
  });
});
describe("nth", function () {
  it("nth_input_1", function () {
    // Failure message:
    // expected nth(['a', 'b', 'c', 'd'], 1) to be 'b'
    expect(nth(["a", "b", "c", "d"], 1)).toBe("b");
  });
  it("nth_input_2", function () {
    // Failure message:
    // expected nth(['a', 'b', 'c', 'd'], -2) to be 'c'
    expect(nth(["a", "b", "c", "d"], -2)).toBe("c");
  });
  it("nth_input_3", function () {
    // Failure message:
    // expected nth(['a', 'b', 'c', 'd'], 0) to be 'a'
    expect(nth(["a", "b", "c", "d"], 0)).toBe("a");
  });
  it("nth_input_4", function () {
    // Failure message:
    // expected nth(['a', 'b', 'c', 'd'], -4) to be 'a'
    expect(nth(["a", "b", "c", "d"], -4)).toBe("a");
  });
  it("nth_input_5", function () {
    // Failure message:
    // expected nth(['a', 'b', 'c', 'd'], -1) to be 'd'
    expect(nth(["a", "b", "c", "d"], -1)).toBe("d");
  });
  it("nth_input_6", function () {
    // Failure message:
    // expected nth(['a', 'b', 'c', 'd'], 3) to be 'd'
    expect(nth(["a", "b", "c", "d"], 3)).toBe("d");
  });
});
describe("takeRight", function () {
  it("take_right_input_1", function () {
    // Failure message:
    // expected takeRight([1, 2, 3]) to equal [3]
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });
  it("take_right_input_2", function () {
    // Failure message:
    // expected takeRight([1, 2, 3], 2) to equal [2, 3]
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });
  it("take_right_input_3", function () {
    // Failure message:
    // expected takeRight([1, 2, 3], 5) to equal [1, 2, 3]
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  it("take_right_input_4", function () {
    // Failure message:
    // expected takeRight([1, 2, 3], 0) to equal []
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });
});
describe("upperFirst", function () {
  it("upper_first_input_1", function () {
    // Failure message:
    // expected upperFirst('fred') to be 'Fred'
    expect(upperFirst("fred")).toBe("Fred");
  });
  it("upper_first_input_2", function () {
    // Failure message:
    // expected upperFirst('FRED') to be 'FRED'
    expect(upperFirst("FRED")).toBe("FRED");
  });
  it("upper_first_input_3", function () {
    // Failure message:
    // expected upperFirst('') to be ''
    expect(upperFirst("")).toBe("");
  });
  it("upper_first_input_4", function () {
    // Failure message:
    // expected upperFirst('only first character') to be 'Only first character'
    expect(upperFirst("only first character")).toBe("Only first character");
  });
});
describe("aperture", function () {
  it("aperture_input_1", function () {
    // Failure message:
    // expected aperture(0, [1, 2, 3, 4, 5]) to equal []
    expect(aperture(0, [1, 2, 3, 4, 5])).toEqual([]);
  });
  it("aperture_input_2", function () {
    // Failure message:
    // expected aperture(1, [1, 2, 3, 4, 5]) to equal [[1], [2], [3], [4], [5]]
    expect(aperture(1, [1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]]);
  });
  it("aperture_input_3", function () {
    // Failure message:
    // expected aperture(2, [1, 2, 3, 4, 5]) to equal [[1, 2], [2, 3], [3, 4], [4, 5]]
    expect(aperture(2, [1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]);
  });
  it("aperture_input_4", function () {
    // Failure message:
    // expected aperture(3, [1, 2, 3, 4, 5]) to equal [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    expect(aperture(3, [1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ]);
  });
  it("aperture_input_5", function () {
    // Failure message:
    // expected aperture(4, [1, 2, 3, 4, 5]) to equal [[1, 2, 3, 4], [2, 3, 4, 5]]
    expect(aperture(4, [1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
    ]);
  });
  it("aperture_input_6", function () {
    // Failure message:
    // expected aperture(5, [1, 2, 3, 4, 5]) to equal [[1, 2, 3, 4, 5]]
    expect(aperture(5, [1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]]);
  });
  it("aperture_input_7", function () {
    // Failure message:
    // expected aperture(6, [1, 2, 3, 4, 5]) to equal []
    expect(aperture(6, [1, 2, 3, 4, 5])).toEqual([]);
  });
});

describe("findFactors", function () {
  it("find_factors_input_1", function () {
    // Failure message:
    // expected findFactors(10) to equal [1,2,5,10]
    expect(findFactors(10)).toEqual([1, 2, 5, 10]);
  });
  it("find_factors_input_2", function () {
    // Failure message:
    // expected findFactors(11) to equal [1,11]
    expect(findFactors(11)).toEqual([1, 11]);
  });
  it("find_factors_input_3", function () {
    // Failure message:
    // expected findFactors(30) to equal [1,2,3,5,6,10,15,30]
    expect(findFactors(30)).toEqual([1, 2, 3, 5, 6, 10, 15, 30]);
  });
  it("find_factors_input_4", function () {
    // Failure message:
    // expected findFactors(111) to equal [1,3,37,111]
    expect(findFactors(111)).toEqual([1, 3, 37, 111]);
  });
  it("find_factors_input_5", function () {
    // Failure message:
    // expected findFactors(321421) to equal [1,293,1097,321421]
    expect(findFactors(321421)).toEqual([1, 293, 1097, 321421]);
  });
  it("find_factors_input_6", function () {
    // Failure message:
    // expected findFactors(412146) to equal [1,2,3,6,7,9,14,18,21,42,63,126,3271,6542,9813,19626,22897,29439,45794,58878,68691,137382,206073,412146]
    expect(findFactors(412146)).toEqual([
      1,
      2,
      3,
      6,
      7,
      9,
      14,
      18,
      21,
      42,
      63,
      126,
      3271,
      6542,
      9813,
      19626,
      22897,
      29439,
      45794,
      58878,
      68691,
      137382,
      206073,
      412146,
    ]);
  });
});
describe("greatestCommonDivisor", function () {
  it("greatest_common_divisor_input_1", function () {
    // Failure message:
    // expected greatestCommonDivisor(3,20) to be 1
    expect(greatestCommonDivisor(3, 20)).toBe(1);
  });
  it("greatest_common_divisor_input_2", function () {
    // Failure message:
    // expected greatestCommonDivisor(8,12) to be 4
    expect(greatestCommonDivisor(8, 12)).toBe(4);
  });
  it("greatest_common_divisor_input_3", function () {
    // Failure message:
    // expected greatestCommonDivisor(20,100) to be 20
    expect(greatestCommonDivisor(20, 100)).toBe(20);
  });
  it("greatest_common_divisor_input_4", function () {
    // Failure message:
    // expected greatestCommonDivisor(30,48) to be 6
    expect(greatestCommonDivisor(30, 48)).toBe(6);
  });
  it("greatest_common_divisor_input_5", function () {
    // Failure message:
    // expected greatestCommonDivisor(66,242) to be 22
    expect(greatestCommonDivisor(66, 242)).toBe(22);
  });
  it("greatest_common_divisor_input_6", function () {
    // Failure message:
    // expected greatestCommonDivisor(1324,2648) to be 1324
    expect(greatestCommonDivisor(1324, 2648)).toBe(1324);
  });
});
describe("sumUpDiagonals", function () {
  it("sum_up_diagonals_input_1", function () {
    // Failure message:
    // expected sumUpDiagonals(arr1) to be 10
    var arr1 = [
      [1, 2],
      [3, 4],
    ];

    expect(sumUpDiagonals(arr1)).toBe(10);
  });
  it("sum_up_diagonals_input_2", function () {
    // Failure message:
    // expected sumUpDiagonals(arr2) to be 30
    var arr2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(sumUpDiagonals(arr2)).toBe(30);
  });
  it("sum_up_diagonals_input_3", function () {
    // Failure message:
    // expected sumUpDiagonals(arr3) to be 11
    var arr3 = [
      [4, 1, 0],
      [-1, -1, 0],
      [0, 0, 9],
    ];

    expect(sumUpDiagonals(arr3)).toBe(11);
  });
  it("sum_up_diagonals_input_4", function () {
    // Failure message:
    // expected sumUpDiagonals(arr4) to be 68
    var arr4 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    expect(sumUpDiagonals(arr4)).toBe(68);
  });
});
describe("twoArrayDifference", function () {
  it("two_array_difference_input_1", function () {
    // Failure message:
    // expected twoArrayDifference([1,2,1], [2]) to equal [1,1]
    expect(twoArrayDifference([1, 2, 1], [2])).toEqual([1, 1]);
  });
  it("two_array_difference_input_2", function () {
    // Failure message:
    // expected twoArrayDifference([1,2,1], [1]) to equal [2]
    expect(twoArrayDifference([1, 2, 1], [1])).toEqual([2]);
  });
  it("two_array_difference_input_3", function () {
    // Failure message:
    // expected twoArrayDifference([2,3,4,5], [2,5]) to equal [3,4]
    expect(twoArrayDifference([2, 3, 4, 5], [2, 5])).toEqual([3, 4]);
  });
  it("two_array_difference_input_4", function () {
    // Failure message:
    // expected twoArrayDifference([2,3,4,5], [6,7,8]) to equal [2,3,4,5]
    expect(twoArrayDifference([2, 3, 4, 5], [6, 7, 8])).toEqual([2, 3, 4, 5]);
  });
  it("two_array_difference_input_5", function () {
    // Failure message:
    // expected twoArrayDifference([2,3,4,5], [2,3,4,5,6]) to equal []
    expect(twoArrayDifference([2, 3, 4, 5], [2, 3, 4, 5, 6])).toEqual([]);
  });
});
describe("union", function () {
  it("union_input_1", function () {
    // Failure message:
    // expect union([2],[1, 2]) to equal [2, 1]
    expect(union([2], [1, 2])).toEqual([2, 1]);
  });
  it("union_input_2", function () {
    // Failure message:
    // expected union([2],[1, 2], [3], [3, 4, 5]) to equal [2,1,3,4,5]
    expect(union([2], [1, 2], [3], [3, 4, 5])).toEqual([2, 1, 3, 4, 5]);
  });
  it("union_input_3", function () {
    // Failure message:
    // expected union([2],[1, 2], [6,8], [4,5,1,2], [2,7,6,9]) to equal [2,1,6,8,4,5,7,9]
    expect(union([2], [1, 2], [6, 8], [4, 5, 1, 2], [2, 7, 6, 9])).toEqual([
      2,
      1,
      6,
      8,
      4,
      5,
      7,
      9,
    ]);
  });
});
describe("zipObject", function () {
  it("zip_object_input_1", function () {
    // Failure message:
    // expected zipObject(['a', 'b'], [1, 2]) to equal { 'a': 1, 'b': 2 }
    expect(zipObject(["a", "b"], [1, 2])).toEqual({ a: 1, b: 2 });
  });
  it("zip_object_input_2", function () {
    // Failure message:
    // expected zipObject(['a', 'b','c','d'], [1, 2, 3]) to equal {a: 1, b: 2, c: 3, d: undefined}
    expect(zipObject(["a", "b", "c", "d"], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: undefined,
    });
  });
  it("zip_object_input_3", function () {
    // Failure message:
    // expected zipObject(['a','b','c'], [1, 2, 3, 4]) to equal {a:1,b:2,c:3}
    expect(zipObject(["a", "b", "c"], [1, 2, 3, 4])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
});
describe("binarySearch", function () {
  it("binary_search_input_1", function () {
    // Failure message:
    // expected binarySearch([1,2,3,4,5],2) to be 1
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
  });
  it("binary_search_input_2", function () {
    // Failure message:
    // expected binarySearch([1,2,3,4,5],3) to be 2
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });
  it("binary_search_input_3", function () {
    // Failure message:
    // expected binarySearch([1,2,3,4,5],5) to be 4
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
  it("binary_search_input_4", function () {
    // Failure message:
    // expected binarySearch([1,2,3,4,5],6) to be -1
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
  it("binary_search_input_5", function () {
    // Failure message:
    // expected binarySearch([
    //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    // ], 10) to be 2
    expect(
      binarySearch(
        [
          5,
          6,
          10,
          13,
          14,
          18,
          30,
          34,
          35,
          37,
          40,
          44,
          64,
          79,
          84,
          86,
          95,
          96,
          98,
          99,
        ],
        10
      )
    ).toBe(2);
  });
  it("binary_search_input_6", function () {
    // Failure message:
    // expected binarySearch([
    //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    // ], 95) to be 16
    expect(
      binarySearch(
        [
          5,
          6,
          10,
          13,
          14,
          18,
          30,
          34,
          35,
          37,
          40,
          44,
          64,
          79,
          84,
          86,
          95,
          96,
          98,
          99,
        ],
        95
      )
    ).toBe(16);
  });
  it("binary_search_input_7", function () {
    // Failure message:
    // expected binarySearch([
    //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    // ], 100) to be -1
    expect(
      binarySearch(
        [
          5,
          6,
          10,
          13,
          14,
          18,
          30,
          34,
          35,
          37,
          40,
          44,
          64,
          79,
          84,
          86,
          95,
          96,
          98,
          98,
        ],
        100
      )
    ).toBe(-1);
  });
});
describe("binaryToDecimal", function () {
  it("binary_to_decimal_input_1", function () {
    // Failure message:
    // expected binaryToDecimal('1') to be 1
    expect(binaryToDecimal("1")).toBe(1);
  });
  it("binary_to_decimal_input_2", function () {
    // Failure message:
    // expected binaryToDecimal('101') to be 5
    expect(binaryToDecimal("101")).toBe(5);
  });
  it("binary_to_decimal_input_3", function () {
    // Failure message:
    // expected binaryToDecimal('1001') to be 9
    expect(binaryToDecimal("1001")).toBe(9);
  });
  it("binary_to_decimal_input_4", function () {
    // Failure message:
    // expected binaryToDecimal('10001') to be 17
    expect(binaryToDecimal("10001")).toBe(17);
  });
  it("binary_to_decimal_input_5", function () {
    // Failure message:
    // expected binaryToDecimal('10011101101') to be 1261
    expect(binaryToDecimal("10011101101")).toBe(1261);
  });
  it("binary_to_decimal_input_6", function () {
    // Failure message:
    // expected binaryToDecimal('100010101010101010101') to be 1135957
    expect(binaryToDecimal("100010101010101010101")).toBe(1135957);
  });
});
describe("reverseVowels", function () {
  it("reverse_vowels_input_1", function () {
    // Failure message:
    // expected reverseVowels('amazing') to be "imazang"
    expect(reverseVowels("amazing")).toBe("imazang");
  });
  it("reverse_vowels_input_2", function () {
    // Failure message:
    // expected reverseVowels('awesome') to be "ewosema"
    expect(reverseVowels("awesome")).toBe("ewosema");
  });
  it("reverse_vowels_input_3", function () {
    // Failure message:
    // expected reverseVowels('Rithm School') to be "Rothm Schoil"
    expect(reverseVowels("Rithm School")).toBe("Rothm Schoil");
  });
});
describe("unzip", function () {
  it("unzip_input_1", function () {
    // Failure message:
    // expected unzip([['a', 1, true], ['b', 2, false]]) to equal [['a', 'b'], [1, 2], [true, false]]
    expect(
      unzip([
        ["a", 1, true],
        ["b", 2, false],
      ])
    ).toEqual([
      ["a", "b"],
      [1, 2],
      [true, false],
    ]);
  });
  it("unzip_input_2", function () {
    // Failure message:
    // expected unzip([[1,2],[3,4]]) to equal [[1,3],[2,4]]
    expect(
      unzip([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
  it("unzip_input_3", function () {
    // Failure message:
    // expected unzip([['a'],['b'],['c']]) to equal [['a','b','c']]
    expect(unzip([["a"], ["b"], ["c"]])).toEqual([["a", "b", "c"]]);
  });
});

describe("zip", function () {
  it("zip_input_1", function () {
    // Failure message:
    // expected zip([1,2], [3, 4]) to equal [[1,3], [2,4]]
    expect(zip([1, 2], [3, 4])).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
  it("zip_input_2", function () {
    // Failure message:
    // expected zip(['w','x','y','z']) to equal [['w'],['x'],['y'],['z']]
    expect(zip(["w", "x", "y", "z"])).toEqual([["w"], ["x"], ["y"], ["z"]]);
  });
  it("zip_input_3", function () {
    // Failure message:
    // expected zip(['a', 'b'], [1, 2], [true, false]) to equal [['a', 1, true], ['b', 2, false]]
    expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
  it("zip_input_4", function () {
    // Failure message:
    // expected zip(['a', 'b','c'], [1, 2], [true, false]) to equal [['a', 1, true], ['b', 2, false], ['c', undefined, undefined]]
    expect(zip(["a", "b", "c"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
      ["c", undefined, undefined],
    ]);
  });
});
describe("doubleValues", function () {
  it("double_values_input_1", function () {
    // Failure message:
    // expected doubleValues([1,2,3]) to equal [2,4,6]
    expect(doubleValues([1, 2, 3])).toEqual([2, 4, 6]);
  });
  it("double_values_input_2", function () {
    // Failure message:
    // expected doubleValues([5,1,2,3,10]) to equal [10,2,4,6,20]
    expect(doubleValues([5, 1, 2, 3, 10])).toEqual([10, 2, 4, 6, 20]);
  });
});

describe("onlyEvenValues", function () {
  it("only_even_values_input_1", function () {
    // Failure message:
    // expected onlyEvenValues([1,2,3]) to equal [2]
    expect(onlyEvenValues([1, 2, 3])).toEqual([2]);
  });
  it("only_even_values_input_2", function () {
    // Failure message:
    // expected onlyEvenValues([5,1,2,3,10]) to equal [2,10]
    expect(onlyEvenValues([5, 1, 2, 3, 10])).toEqual([2, 10]);
  });
  it("only_even_values_input_3", function () {
    // Failure message:
    // expected onlyEvenValues([1,3,5]) to equal []
    expect(onlyEvenValues([1, 3, 5])).toEqual([]);
  });
});

describe("showFirstAndLast", function () {
  it("show_first_and_last_input_1", function () {
    // Failure message:
    // expected showFirstAndLast(['elie','matt', 'michael']) to equal ["ee", "mt", "ml"]
    expect(showFirstAndLast(["elie", "matt", "michael"])).toEqual([
      "ee",
      "mt",
      "ml",
    ]);
  });
  it("show_first_and_last_input_2", function () {
    // Failure message:
    // expected showFirstAndLast(['hi', 'goodbye', 'smile']) to equal ['hi', 'ge', 'se']
    expect(showFirstAndLast(["hi", "goodbye", "smile"])).toEqual([
      "hi",
      "ge",
      "se",
    ]);
  });
});
describe("addKeyAndValue", function () {
  it("add_key_and_value_input_1", function () {
    // Failure message:
    // expected addKeyAndValue([{foo: 'bar'}, {baz: 'woah'}], 'a', 'b') to equal [{foo: 'bar', a: 'b'}, {baz: 'woah', a: 'b'}]
    expect(addKeyAndValue([{ foo: "bar" }, { baz: "woah" }], "a", "b")).toEqual(
      [
        { foo: "bar", a: "b" },
        { baz: "woah", a: "b" },
      ]
    );
  });
  it("add_key_and_value_input_2", function () {
    // Failure message:
    // expected addKeyAndValue([
    //   {name: 'Elie'},
    //   {name: 'Michael'},
    //   {name: 'Matt'}
    // ], 'title', 'instructor') to equal
    // [
    //   {name: 'Elie', title:'instructor'},
    //   {name: 'Michael', title:'instructor'},
    //   {name: 'Matt', title:'instructor'}
    // ]
    expect(
      addKeyAndValue(
        [{ name: "Elie" }, { name: "Michael" }, { name: "Matt" }],
        "title",
        "instructor"
      )
    ).toEqual([
      { name: "Elie", title: "instructor" },
      { name: "Michael", title: "instructor" },
      { name: "Matt", title: "instructor" },
    ]);
  });
});

describe("vowelCount", function () {
  it("vowel_count_input_1", function () {
    // Failure message:
    // expected vowelCount('Elie') to equal {e:2,i:1}
    expect(vowelCount("Elie")).toEqual({ e: 2, i: 1 });
  });
  it("vowel_count_input_2", function () {
    // Failure message:
    // expected vowelCount('Michael') to equal {a:1,e:1,i:1}
    expect(vowelCount("Michael")).toEqual({ a: 1, e: 1, i: 1 });
  });
  it("vowel_count_input_3", function () {
    // Failure message:
    // expected vowelCount('Matt') to equal {a:1}
    expect(vowelCount("Matt")).toEqual({ a: 1 });
  });
  it("vowel_count_input_4", function () {
    // Failure message:
    // expected vowelCount('hmmm') to equal {}
    expect(vowelCount("hmmm")).toEqual({});
  });
  it("vowel_count_input_5", function () {
    // Failure message:
    // expect vowelCount('I Am awesome and so are you') to equal {i: 1, a: 4, e: 3, o: 3, u: 1}
    expect(vowelCount("I Am awesome and so are you")).toEqual({
      i: 1,
      a: 4,
      e: 3,
      o: 3,
      u: 1,
    });
  });
});
describe("valTimesIndex", function () {
  it("val_times_index_input_1", function () {
    // Failure message:
    // expected valTimesIndex([1,2,3]) to equal [0,2,6]
    expect(valTimesIndex([1, 2, 3])).toEqual([0, 2, 6]);
  });
  it("val_times_index_input_2", function () {
    // Failure message:
    // expected valTimesIndex([1,-2,-3]) to equal [0,-2,-6]
    expect(valTimesIndex([1, -2, -3])).toEqual([0, -2, -6]);
  });
  it("val_times_index_input_3", function () {
    // Failure message:
    // expected valTimesIndex([4,2,8,0,1]) to equal [0, 2, 16, 0, 4]
    expect(valTimesIndex([4, 2, 8, 0, 1])).toEqual([0, 2, 16, 0, 4]);
  });
  it("val_times_index_input_4", function () {
    // Failure message:
    // expected valTimesIndex([]) to equal []
    expect(valTimesIndex([])).toEqual([]);
  });
});
describe("extractKey", function () {
  it("extract_key_input_1", function () {
    // Failure message:
    // expected extractKey([
    //   {name: 'Elie'},
    //   {name: 'Michael'},
    //   {name: 'Matt'}
    // ], 'name') to equal ['Elie', 'Michael', 'Matt']
    expect(
      extractKey(
        [{ name: "Elie" }, { name: "Michael" }, { name: "Matt" }],
        "name"
      )
    ).toEqual(["Elie", "Michael", "Matt"]);
  });
  it("extract_key_input_2", function () {
    // Failure message:
    // expected extractKey([
    //   {eyeColor: 'blue', age: 4},
    //   {eyeColor: 'brown', age: 8},
    //   {eyeColor: 'green', age: 1},
    //   {eyeColor: 'brown', age: 6}
    // ], age) to equal [4, 8, 1, 6]
    expect(
      extractKey(
        [
          { eyeColor: "blue", age: 4 },
          { eyeColor: "brown", age: 8 },
          { eyeColor: "green", age: 1 },
          { eyeColor: "brown", age: 6 },
        ],
        "age"
      )
    ).toEqual([4, 8, 1, 6]);
  });
});
describe("extractFullName", function () {
  it("extract_full_name_input_1", function () {
    // Failure message:
    // expected extractFullName([
    //   {first: 'Elie', last:"Schoppik"},
    //   {first: 'Tim', last:"Garcia"},
    //   {first: 'Matt', last:"Lane"},
    //   {first: 'Colt', last:"Steele"}
    // ]) to equal ['Elie Schoppik', 'Matt Lane', 'Michael Hueter']
    expect(
      extractFullName([
        { first: "Elie", last: "Schoppik" },
        { first: "Matt", last: "Lane" },
        { first: "Michael", last: "Hueter" },
      ])
    ).toEqual(["Elie Schoppik", "Matt Lane", "Michael Hueter"]);
  });
  it("extract_full_name_input_2", function () {
    // Failure message:
    // expected extractFullName([
    //   {first: "Amalie", middle: "Emmy", last: "Noether"},
    //   {first: "Mary", middle: "Lucy", last: "Cartwright"},
    // ]) to equal ["Amalie Noether", "Mary Cartwright"]
    expect(
      extractFullName([
        { first: "Amalie", middle: "Emmy", last: "Noether" },
        { first: "Mary", middle: "Lucy", last: "Cartwright" },
      ])
    ).toEqual(["Amalie Noether", "Mary Cartwright"]);
  });
});
describe("filterByKey", function () {
  it("filter_by_key_input_1", function () {
    // Failure message:
    // expected filterByKey([
    //   {num1: 3, num2: 5},
    //   {num2: 4, num3: 1, num5: 1},
    //   {num3: 3}
    // ], 'num3') to equal [
    //   {num2: 4, num3: 1, num5: 1},
    //   {num3: 3}
    // ]
    expect(
      filterByKey(
        [{ num1: 3, num2: 5 }, { num2: 4, num3: 1, num5: 1 }, { num3: 3 }],
        "num3"
      )
    ).toEqual([{ num2: 4, num3: 1, num5: 1 }, { num3: 3 }]);
  });
  it("filter_by_key_input_2", function () {
    // Failure message:
    // expected filterByKey([
    //   {first: 'Elie', last:"Schoppik"},
    //   {first: 'Matt', last:"Lane", isCatOwner: true},
    //   {first: 'Michael', last:"Hueter"},
    //   {first: 'Colt', last:"Steele", isCatOwner: true}
    // ],'isCatOwner') to equal [
    //   {first: 'Matt', last:"Lane", isCatOwner: true},
    //   {first: 'Colt', last:"Steele", isCatOwner: true}
    // ]
    expect(
      filterByKey(
        [
          { first: "Elie", last: "Schoppik" },
          { first: "Matt", last: "Lane", isCatOwner: true },
          { first: "Michael", last: "Hueter" },
          { first: "Colt", last: "Steele", isCatOwner: true },
        ],
        "isCatOwner"
      )
    ).toEqual([
      { first: "Matt", last: "Lane", isCatOwner: true },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ]);
  });
});

describe("findInObj", function () {
  it("find_in_obj_input_1", function () {
    // Failure message:
    // expected findInObj(people, "lastName", "Lane") to equal { firstName: "Matt", lastName: "Lane" }
    var people = [
      { firstName: "Matt", lastName: "Lane" },
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Michael", lastName: "Hueter" },
      { firstName: "Michael", lastName: "Bolton" },
    ];

    expect(findInObj(people, "lastName", "Lane")).toEqual({
      firstName: "Matt",
      lastName: "Lane",
    });
  });
  it("find_in_obj_input_2", function () {
    // Failure message:
    // expected findInObj(people, "firstName", "Michael") to equal { firstName: "Michael", lastName: "Hueter" }
    var people = [
      { firstName: "Matt", lastName: "Lane" },
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Michael", lastName: "Hueter" },
      { firstName: "Michael", lastName: "Bolton" },
    ];

    expect(findInObj(people, "firstName", "Michael")).toEqual({
      firstName: "Michael",
      lastName: "Hueter",
    });
  });
  it("find_in_obj_input_3", function () {
    // Failure message:
    // expected findInObj(people, "firstName", "Tim") to be undefined
    var people = [
      { firstName: "Matt", lastName: "Lane" },
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Michael", lastName: "Hueter" },
      { firstName: "Michael", lastName: "Bolton" },
    ];

    expect(findInObj(people, "firstName", "Tim")).toBeUndefined();
  });
  it("find_in_obj_input_4", function () {
    // Failure message:
    // expected findInObj(people, "notAKey", "notAValue") to be undefined
    var people = [
      { firstName: "Matt", lastName: "Lane" },
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Michael", lastName: "Hueter" },
      { firstName: "Michael", lastName: "Bolton" },
    ];

    expect(findInObj(people, "notAKey", "notAValue")).toBeUndefined();
  });
});
describe("hasOddNumber", function () {
  it("has_odd_number_input_1", function () {
    // Failure message:
    // expected hasOddNumber([1,2,2,2,2,2,4]) to be true
    expect(hasOddNumber([1, 2, 2, 2, 2, 2, 4])).toBe(true);
  });
  it("has_odd_number_input_2", function () {
    // Failure message:
    // expected hasOddNumber([2,2,2,2,2,4]) to be false
    expect(hasOddNumber([2, 2, 2, 2, 2, 4])).toBe(false);
  });
});
describe("hasAZero", function () {
  it("has_a_zero_input_1", function () {
    // Failure message:
    // expected hasAZero(3332123213101232321) to be true
    expect(hasAZero(3332123213101232321)).toBe(true);
  });
  it("has_a_zero_input_2", function () {
    // Failure message:
    // expected hasAZero(1212121) to be false
    expect(hasAZero(1212121)).toBe(false);
  });
});
describe("hasOnlyOddNumbers", function () {
  it("has_only_odd_numbers_input_1", function () {
    // Failure message:
    // expected hasOnlyOddNumbers([1,3,5,7]) to be true
    expect(hasOnlyOddNumbers([1, 3, 5, 7])).toBe(true);
  });
  it("has_only_odd_numbers_input_2", function () {
    // Failure message:
    // expected hasOnlyOddNumbers([1,2,3,5,7]) to be false
    expect(hasOnlyOddNumbers([1, 2, 3, 5, 7])).toBe(false);
  });
});
describe("hasNoDuplicates", function () {
  it("has_no_duplicates_input_1", function () {
    // Failure message:
    // expected hasNoDuplicates([1,2,3,1]) to be false
    expect(hasNoDuplicates([1, 2, 3, 1])).toBe(false);
  });
  it("has_no_duplicates_input_2", function () {
    // Failure message:
    // expected hasNoDuplicates([1,2,3]) to be true
    expect(hasNoDuplicates([1, 2, 3])).toBe(true);
  });
});
describe("hasCertainKey", function () {
  it("has_certain_key_input_1", function () {
    // Failure message:
    // expect hasCertainKey(arr,'first') to be true
    var arr = [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Matt", last: "Lane", isCatOwner: true },
      { title: "Instructor", first: "Michael", last: "Hueter" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ];

    expect(hasCertainKey(arr, "first")).toBe(true);
  });
  it("has_certain_key_input_2", function () {
    // Failure message:
    // expect hasCertainKey(arr,'isCatOwner') to be false
    var arr = [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Matt", last: "Lane", isCatOwner: true },
      { title: "Instructor", first: "Michael", last: "Hueter" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ];

    expect(hasCertainKey(arr, "isCatOwner")).toBe(false);
  });
});
describe("hasCertainValue", function () {
  it("has_certain_value_input_1", function () {
    // Failure message:
    // expected hasCertainValue(arr,'title','Instructor') to be true
    var arr = [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Matt", last: "Lane", isCatOwner: true },
      { title: "Instructor", first: "Michael", last: "Hueter" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ];

    expect(hasCertainValue(arr, "title", "Instructor")).toBe(true);
  });
  it("has_certain_value_input_2", function () {
    // Failure message:
    // expected hasCertainValue(arr,'first','Elie') to be false
    var arr = [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Matt", last: "Lane", isCatOwner: true },
      { title: "Instructor", first: "Michael", last: "Hueter" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ];

    expect(hasCertainValue(arr, "first", "Elie")).toBe(false);
  });
});
describe("sumLessThan", function () {
  it("sum_less_than_input_1", function () {
    // Failure message:
    // expected sumLessThan([1,2,3,4,5], 4) to be 6
    expect(sumLessThan([1, 2, 3, 4, 5], 4)).toBe(6);
  });
  it("sum_less_than_input_2", function () {
    // Failure message:
    // expected sumLessThan([5,3,10,7], 100) to be 25
    expect(sumLessThan([5, 3, 10, 7], 100)).toBe(25);
  });
  it("sum_less_than_input_3", function () {
    // Failure message:
    // expected sumLessThan([2,2,2], 1) to be 0
    expect(sumLessThan([2, 2, 2], 1)).toBe(0);
  });
});
describe("extractValue", function () {
  it("extract_value_input_1", function () {
    // Failure message:
    // This test has no failure messages
    var arr = [
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Matt", lastName: "Lane", dogOwner: true },
      { firstName: "Michael", lastName: "Hueter" },
    ];

    expect(extractValue(arr, "firstName")).toEqual(["Elie", "Matt", "Michael"]);
  });
  it("extract_value_input_2", function () {
    // Failure message:
    // This test has no failure messages
    var arr = [
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Matt", lastName: "Lane", dogOwner: true },
      { firstName: "Michael", lastName: "Hueter" },
    ];

    expect(extractValue(arr, "lastName")).toEqual([
      "Schoppik",
      "Lane",
      "Hueter",
    ]);
  });
  it("extract_value_input_3", function () {
    // Failure message:
    // This test has no failure messages
    var arr = [
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Matt", lastName: "Lane", dogOwner: true },
      { firstName: "Michael", lastName: "Hueter" },
    ];

    expect(extractValue(arr, "dogOwner")).toEqual([true]);
  });
  it("extract_value_input_4", function () {
    // Failure message:
    // This test has no failure messages
    var arr = [
      { firstName: "Elie", lastName: "Schoppik" },
      { firstName: "Matt", lastName: "Lane", dogOwner: true },
      { firstName: "Michael", lastName: "Hueter" },
    ];

    expect(extractValue(arr, "ferretOwner")).toEqual([]);
  });
});
describe("keyCount", function () {
  it("key_count_input_1", function () {
    // Failure message:
    // expected keyCount([
    //   { name: "Elie", catOwner: false },
    //   { name: "Moxie", isCat: true }
    // ]) to equal { name: 2, catOwner: 1, isCat: 1}
    expect(
      keyCount([
        { name: "Elie", catOwner: false },
        { name: "Moxie", isCat: true },
      ])
    ).toEqual({ name: 2, catOwner: 1, isCat: 1 });
  });
  it("key_count_input_2", function () {
    // Failure message:
    // expected keyCount([
    //   { age: 1, eyeColor: "blue" },
    //   { age: 3, eyeColor: "brown" },
    //   { age: 7, inSchool: true }
    // ]) to equal { age: 3, eyeColor: 2, inSchool: 1 }
    expect(
      keyCount([
        { age: 1, eyeColor: "blue" },
        { age: 3, eyeColor: "brown" },
        { age: 7, inSchool: true },
      ])
    ).toEqual({ age: 3, eyeColor: 2, inSchool: 1 });
  });
});
describe("swap", function () {
  it("swaps_values_correctly", function () {
    // Failure message:
    // make sure your result is the same as the sample input / output
    var arr = [1, 2, 3, 4];
    expect(swap(arr, 0, 2)).toEqual([3, 2, 1, 4]); //
    expect(arr).toEqual([3, 2, 1, 4]);

    var arr2 = [5, 6, 8, 7];
    expect(swap(arr2, 2, 3)).toEqual([5, 6, 7, 8]);
    expect(arr2).toEqual([5, 6, 7, 8]);
  });
});
describe("twoArrayObject", function () {
  it("returns_an_object_with_the_correct_keys_and_values", function () {
    // Failure message:
    // see the sample input output for what the tests are looking for
    expect(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: null,
    });
    expect(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
    expect(twoArrayObject(["x", "y", "z"], [1, 2])).toEqual({
      x: 1,
      y: 2,
      z: null,
    });
  });
});
describe("mergeSortedArrays", function () {
  it("merge_sorted_arrays_input_2", function () {
    // Failure message:
    // you have not successfully returned a new sorted array
    expect(
      mergeSortedArrays([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])
    ).toEqual([-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8]);
  });
  it("merge_sorted_arrays_should_be_pure", function () {
    // Failure message:
    // after merging [1, 3, 4, 5] and [2, 4, 6, 8], the input
    // arrays should be unchanged
    var arr1 = [1, 3, 4, 5];
    var arr2 = [2, 4, 6, 8];
    mergeSortedArrays(arr1, arr2);
    expect(arr1).toEqual([1, 3, 4, 5]);
    expect(arr2).toEqual([2, 4, 6, 8]);
  });
  it("merge_sorted_arrays_input_1", function () {
    // Failure message:
    // your function is modifying the parameters, that should not happen
    expect(mergeSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])).toEqual([
      1,
      2,
      3,
      4,
      4,
      5,
      6,
      8,
    ]);
  });
  it("merge_sorted_arrays_input_3", function () {
    // Failure message:
    // your test is not passing
    expect(mergeSortedArrays([3, 4, 5], [1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});
describe("hammingDistance", function () {
  it("returns_a_message_if_the_inputs_are_invalid", function () {
    // Failure message:
    // hammingDistance must return "Input strings must have the same length." if the input strings have different lengths
    //
    // hammingDistance("yoyo", "yoyoyo") // "Input strings must have the same length.")
    expect(hammingDistance("yoyo", "yoyoyo")).toBe(
      "Input strings must have the same length."
    );
  });
  it("checks_special_characters", function () {
    // Failure message:
    // hammingDistance should track non-alphanumeric characters
    //
    // hammingDistance("You want the truth???? You can't handle the truth!!!", "You want the truth?!?! You can't handle the truth!!!") // 2
    // hammingDistance("!@#$%^&*()", "#@!^%$(*&)") // 6
    expect(
      hammingDistance(
        "You want the truth???? You can't handle the truth!!!",
        "You want the truth?!?! You can't handle the truth!!!"
      )
    ).toBe(2);
    expect(hammingDistance("!@#$%^&*()", "#@!^%$(*&)")).toBe(6);
  });
  it("calculates_hamming_distance", function () {
    // Failure message:
    // hammingDistance must return the correct hamming distance on strings of the same length.
    //
    //
    // hammingDistance("hello", "jello") // 1)
    // hammingDistance("cool", "kewl") // 3
    // hammingDistance("abcde", "bcdef") // 5
    // hammingDistance("this is a complete sentence", "thiz iz a complete sentenze") // 3
    expect(hammingDistance("hello", "jello")).toBe(1);
    expect(hammingDistance("cool", "kewl")).toBe(3);
    expect(hammingDistance("abcde", "bcdef")).toBe(5);
    expect(
      hammingDistance(
        "this is a complete sentence",
        "thiz iz a complete sentenze"
      )
    ).toBe(3);
  });
  it("is_case_insensitive", function () {
    // Failure message:
    // hammingDistance should be case insensitive
    //
    // hammingDistance("sweet", "SWEET") // 0
    // hammingDistance("The quick brown fox JUMPED over the lazy dog", "The brown quick dog JUMPED over the lazy fox") // 14
    expect(hammingDistance("sweet", "SWEET")).toBe(0);
    expect(
      hammingDistance(
        "The quick brown fox JUMPED over the lazy dog",
        "The brown quick dog JUMPED over the lazy fox"
      )
    ).toBe(14);
  });
});

describe("validAnagram", function () {
  it("validAnagram_returns_true_if_the_strings_are_valid_otherwise_returns_false", function () {
    // Failure message:
    // This test has no failure messages
    expect(validAnagram("", "")).toBe(true); // true
    expect(validAnagram("aaz", "zza")).toBe(false); // true
    expect(validAnagram("anagram", "nagaram")).toBe(true); // true
    expect(validAnagram("rat", "car")).toBe(false); // false
    expect(validAnagram("awesome", "awesom")).toBe(false);
    expect(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")).toBe(
      false
    );
    expect(validAnagram("qwerty", "qeywrt")).toBe(true);
    expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });
});

describe("datePractice - displayToday", function () {
  it("displays the current date", function () {
    expect(displayToday()).toEqual(new Date())
  })
  it("returns a date", function () {
    expect(displayToday() instanceof Date).toBe(true)
  })
})

describe("datePractice - isWeekend", function () {
  it("displays the current date", function () {
    expect(isWeekend(new Date("1/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("2/1/2020"))).toEqual(true)
    expect(isWeekend(new Date("3/1/2020"))).toEqual(true)
    expect(isWeekend(new Date("4/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("5/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("6/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("7/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("8/1/2020"))).toEqual(true)
    expect(isWeekend(new Date("9/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("10/1/2020"))).toEqual(false)
    expect(isWeekend(new Date("11/1/2020"))).toEqual(true)
    expect(isWeekend(new Date("12/1/2020"))).toEqual(false)
  })
})

describe("datePractice - displayMonthName", function () {
  it("displays the current date", function () {
    expect(displayMonthName(new Date("1/1/2020"))).toEqual("January")
    expect(displayMonthName(new Date("2/1/2020"))).toEqual("February")
    expect(displayMonthName(new Date("3/1/2020"))).toEqual("March")
    expect(displayMonthName(new Date("4/1/2020"))).toEqual("April")
    expect(displayMonthName(new Date("5/1/2020"))).toEqual("May")
    expect(displayMonthName(new Date("6/1/2020"))).toEqual("June")
    expect(displayMonthName(new Date("7/1/2020"))).toEqual("July")
    expect(displayMonthName(new Date("8/1/2020"))).toEqual("August")
    expect(displayMonthName(new Date("9/1/2020"))).toEqual("September")
    expect(displayMonthName(new Date("10/1/2020"))).toEqual("October")
    expect(displayMonthName(new Date("11/1/2020"))).toEqual("November")
    expect(displayMonthName(new Date("12/1/2020"))).toEqual("December")
  })
})