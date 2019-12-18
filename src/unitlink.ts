const base = 'http://localhost:4200/?';
const fondskonto = 'produkt=fondskonto';
const ekstrapensjon = 'produkt=ekstrapensjon';
const ips = 'produkt=ips';
const cmid = 'cmid=701175836';
const periodicdeposit = 'periodicdeposit=500';
const goTo = (args: string[]) => () => (window.location.href = [ base ].concat(args).join('&'));

export default {
	fondskonto: goTo([ fondskonto, periodicdeposit ]),
	fondskontoAdvisor: goTo([ fondskonto, periodicdeposit, cmid ]),
	ekstrapensjon: goTo([ ekstrapensjon, periodicdeposit ]),
	ekstrapensjonAdvisor: goTo([ ekstrapensjon, periodicdeposit, cmid ]),
	ips: goTo([ ips, periodicdeposit ]),
	ipsAdvisor: goTo([ ips, periodicdeposit, cmid ])
};
