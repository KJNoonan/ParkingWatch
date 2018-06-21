import request from "request-promise";
import { GET_VERB, runService } from "./service/HTTPFetcher";
import { buildChicagoStreetClosureDataUrl } from "./service/ChicagoDataUrl";
import { CITY_OF_CHICAGO_DATA_TOKEN } from "./applicationContext/appplicationConstants";
import moment from "moment";

const streetname = "EASTWOOD";
const streetNumber = 1600;
const applicationstartdate = moment().format("YYYY-MM-DD");
const streetclosure = "Full";
const closureDataURL = buildChicagoStreetClosureDataUrl({
  streetname,
  applicationstartdate,
  streetclosure
});

console.log(closureDataURL);

runService(GET_VERB, closureDataURL, CITY_OF_CHICAGO_DATA_TOKEN).then(e => {
  console.log(e);
}, console.log);
