import request from "request-promise";
import { GET_VERB, runService } from "./service/HTTPFetcher";
import { buildChicagoStreetClosureDataUrl } from "./service/ChicagoDataUrl";

const address = "1600 W BELL PLAINE";
//runService(GET_VERB, "https://google.com").then(console.log, console.log);
