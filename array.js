/**
Task Description  (1 points)
You have been given an array of numbers. Your task is to write a function sortDescending that sorts the array in descending order.
 * @param {*} arr 
 * @returns 
 */
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

/**
Task Description  (2 points)
You have been given a filename as a string. Your task is to write a function getFileExtension that extracts the file extension from the filename and returns it as a string.

Example
Input filename: "example.txt"

Output: "txt"

Requirements
Your function should take one argument, which is a string representing a filename.
Your function should return a string representing the file extension of the input filename.
Your function should work for filenames of any length, including empty filenames.
Your function should handle filenames that do not contain a "." character by returning an empty string.
Your function should handle filenames that have multiple "." characters by returning the file extension that appears after the last "." character.
Evaluation Criteria
 * @param {*} filename 
 * @returns 
 */
function getFileExtension(filename) {
  const arr = filename.split(".");
  if (arr.length === 1) return "";
  return arr[arr.length - 1];
}

/**
Task Description (3 points)
You have been given an array of customer objects. Each customer object contains a name property and a cars property, which is an array of car objects. 
Each car object contains a name property and a model property. 
Your task is to write a function extractCarsModels that extracts the name and model properties of all the cars for each customer and returns them as an array of strings in the format "<car name>-<car model>".

Output array: ["Ford-Fiesta", "Ford-Focus", "Chevrolet-Camaro", "Chevrolet-Impala"]
 * @returns {string[]} array of car models
 **/
function extractCarsModels() {
  const customers = [
    {
      name: "John",
      cars: [
        {
          name: "Ford",
          model: "Fiesta",
        },
        {
          name: "Ford",
          model: "Focus",
        },
      ],
    },
    {
      name: "Dave",
      cars: [
        {
          name: "Chevrolet",
          model: "Camaro",
        },
        {
          name: "Chevrolet",
          model: "Impala",
        },
      ],
    },
  ];
  let carsNames = [];
  customers.forEach((customer) =>
    customer.cars.forEach((car) => carsNames.push(`${car.name}-${car.model}`))
  );
  return carsNames;
}

/**
Task Description (5 points)
You have been given an array that contains nested arrays of integers. 
Your task is to write a function flattenArray that takes this array as input and returns a new array that contains all the integers from the original array in a single dimension, without any nesting.

Example
Input array: [1, [2, [3, 4], 5], 6]

Output array: [1, 2, 3, 4, 5, 6]

Requirements
Your function should take one argument, which is an array of integers or nested arrays of integers.
Your function should return a new array that contains all the integers from the input array in a single dimension, without any nesting.
Your function should work for arrays of any size, including empty arrays.
 * @param {any[]} arr 
 * @returns {any[]} plain array
 */
function plainArray(arr) {
  return arr.flat(Infinity);
}

module.exports = {
  plainArray,
  extractCarsModels,
  getFileExtension,
  sortDescending,
};
