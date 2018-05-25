import { oneIsNotEmpty, isEmpty } from "../util/ObjectUtil";

import querystring from "query-string";

/**
 * Returns a url that will query the street closure data
 * @param {string} streetname - the name of the street the closure is on
 * @param {string} streetnumberto - the start of the street range
 * @param {string} streetnumberfrom - the end of the street range
 * @param {string} applicationstartdate - the start of the range of application start dates
 * @param {string} applicationenddate - the end of the range of application end dates
 * @param {string} direction - the side of the street the closure is going
 * @param {string} streetclosure - the type of closure
 * @returns {string} generated url
 */
export const buildChicagoStreetClosureDataUrl = ({
  streetname,
  streetnumberfrom,
  applicationstartdate,
  applicationenddate,
  streetnumberto,
  direction,
  streetclosure
}) => {
  const args = {
    streetname,
    streetnumberfrom,
    applicationstartdate,
    applicationenddate,
    streetnumberto,
    direction,
    streetclosure
  };
  let query;
  if (!isEmpty(args)) {
    query = querystring.stringify(args);
    console.log(query);
  }
  return `https://data.cityofchicago.org/resource/erhc-fkv9.json${
    !isEmpty(query) ? "?" + query : ""
  }`;
};
