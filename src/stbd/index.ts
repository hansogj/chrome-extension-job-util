import fmi from "./fmi";
import setFailoverCookie from "./setFailoverCookie";
import ssulAux from "./ssul-aux";
import ssulWeb from "./ssul-web";
import unitlink from "./unitlink";
import { localHost } from "../util";
import { users } from './user';

const testEnv = "https://www-t.storebrand.no";



export default {
  local: {
    fmi: fmi(localHost(9002)),
    unitlink: unitlink(localHost(8080)),
    ssulAux: ssulAux(localHost(8000)),
    ssulWeb: ssulWeb(localHost(3000)),
  },
  test: {
    fmi: fmi(testEnv),
    unitlink: unitlink(`${testEnv}/static/open/unitlink/#/introduction`),
    ssulAux: ssulAux(testEnv),
    ssulWeb: ssulWeb(`${testEnv}/selfservice-unitlink-web`),
  },
  setFailoverCookie,
  users,
};


