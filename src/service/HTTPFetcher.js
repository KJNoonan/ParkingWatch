import request from "request-promise";
import { isEmpty } from "../util/ObjectUtil";
export const GET_VERB = "GET";

/**
 * Sets up a request promise to be resolved
 * @param {string} verb - the http verb to request with
 * @param {string} url - the url to send the request to
 * @param {string} token - optional to be added on as a set-token
 * @returns {promise} - promise to resolve
 */
export const runService = (verb, url, token) => {
  const options = {
    method: verb,
    url,
    json: true,
    headers: []
  };
  if (!isEmpty(token)) {
    options.headers.push();
  }
  return request(options);
};
