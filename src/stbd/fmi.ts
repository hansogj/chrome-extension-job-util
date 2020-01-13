import goTo from '../goto';
const base = 'http://localhost:9002/fpi/start.html?';
const realm = 'realm=storebrand';
const cmid = 'cmid=701175836';

const goToBase = (args: string[]) => goTo(base, args);

export default {
	user: goToBase([ realm ]),
	advisor: goToBase([ realm, cmid ])
};
