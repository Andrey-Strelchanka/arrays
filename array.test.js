const {
  plainArray,
  extractCarsModels,
  getFileExtension,
  sortDescending,
} = require("./array");

describe("plainArray", () => {
  it("should handle empty array", () => {
    expect(plainArray([])).toEqual([]);
  });

  it("should flatten a nested array", () => {
    expect(plainArray([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  it("should flatten a nested array", () => {
    expect(plainArray([1, [2, [3]]])).toEqual([1, 2, 3]);
  });

  it("should flatten a nested array", () => {
    expect(plainArray([1, [2, [3], [4, 5, [6]]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("extractCarsModels", () => {
  it("should extract cars models", () => {
    const result = [
      "Ford-Fiesta",
      "Ford-Focus",
      "Chevrolet-Camaro",
      "Chevrolet-Impala",
    ];

    expect(extractCarsModels()).toEqual(result);

    expect(extractCarsModels().length).toEqual(result.length);
  });
});

describe("getFileExtension", () => {
  it("should return file extension", () => {
    expect(getFileExtension("file.txt")).toEqual("txt");
    expect(getFileExtension("file.js")).toEqual("js");
    expect(getFileExtension("file")).toEqual("");
    expect(getFileExtension("file.extension.txt")).toEqual("txt");
    expect(getFileExtension("file.extension.image.png.json")).toEqual("json");
  });
});

describe("sortDescending", () => {
  it("should sort array in descending order", () => {
    expect(sortDescending([1, 2, 3])).toEqual([3, 2, 1]);
    expect(sortDescending([3, 2, 1])).toEqual([3, 2, 1]);
    expect(sortDescending([1, 3, 2])).toEqual([3, 2, 1]);
    expect(sortDescending([1, 1, 1])).toEqual([1, 1, 1]);
  });
});
