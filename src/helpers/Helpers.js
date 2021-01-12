/** 
 * @name Helpers JS
 * @purpose Provide various utility functions to other components
 */

export const checkValue = (array1, array2) => {
  let results;
  array1.forEach((element) => {
    if (array2.includes(element)) {
      results = true;
    } else {
      results = false;
    }
  });
  return results;
};
