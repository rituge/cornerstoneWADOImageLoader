/**
 */
(function ($, cornerstone, cornerstoneWADOImageLoader) {

  "use strict";
  /**
   * Returns the values as an array of javascript numbers
   *
   * @param element - The javascript object for the specified element in the metadata
   * @param [minimumLength] - the minimum number of values
   * @returns {*}
   */
  function getNumberValues(element, minimumLength) {
    if (!element) {
      return;
    }
    // Value is not present if the attribute has a zero length value
    if (!element.Value) {
      return;
    }
    // make sure we have the expected length
    if (minimumLength && element.Value.length < minimumLength) {
      return;
    }

    var values = [];
    for(var i=0; i < element.Value.length; i++) {
      values.push(parseFloat(element.Value[i]));
    }
    return values;
  }

  cornerstoneWADOImageLoader.wadors.getNumberValues = getNumberValues;
}($, cornerstone, cornerstoneWADOImageLoader));