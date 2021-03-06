'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Convert epoch to CSL date
 *
 * @access protected
 * @function parseDate
 *
 * @param {Number|String} value - Epoch time or string in format "YYYY-MM-DD"
 *
 * @return {Object[]} Array of an object, containing the property "date-parts" with the value [ YYYY, MM, DD ]
 */
var parseDate = function parseDate(value) {
  var date = new Date(value);
  return [{
    'date-parts': date.getFullYear() ? [date.getFullYear(), date.getMonth() + 1, date.getDate()] : []
  }];
};

exports.default = parseDate;