import { sum, tid } from "./wintid";

import stbd from './stbd'
// @ts-ignore
window["stbd"] = stbd;
// @ts-ignore
window["wintid"] = { sum, tid };
