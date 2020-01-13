import unitlink from './stbd/unitlink';
import fmi from './stbd/fmi';
import stbdTest from './stbd/stbd-test';

import { sum, tid } from './wintid';

// @ts-ignore
window['stbd'] = { unitlink, fmi, stbdTest };
// @ts-ignore
window['wintid'] = { sum, tid };
