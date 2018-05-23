import request from "request-promise";
export const GET_VERB = "GET";

export default class HTTPFetcher {
  static runService(verb, url, token) {
    const requestSeed = {
      method: verb,
      url,
      json: true,
      headers: []
    };
    if (!isEmpty(token)) {
      requestSeed.headers.push();
    }
  }
}
