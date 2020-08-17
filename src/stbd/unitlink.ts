import { goTo } from '../util';
export default (env = 'http://localhost:8080') => {

    const base = `${env}/`;
    const fondskonto = 'produkt=fondskonto';
    const ekstrapensjon = 'produkt=ekstrapensjon';
    const ips = 'produkt=ips';
    const cmid = 'cmid=701175836';
    const periodicdeposit = 'periodicdeposit=500';
    const goToBase = (args: string[]) => goTo(base, args);
    
    

return {
	fondskonto: goToBase([ fondskonto, periodicdeposit ]),
	fondskontoAdvisor: goToBase([ fondskonto, periodicdeposit, cmid ]),
	ekstrapensjon: goToBase([ ekstrapensjon, periodicdeposit ]),
	ekstrapensjonAdvisor: goToBase([ ekstrapensjon, periodicdeposit, cmid ]),
	ips: goToBase([ ips, periodicdeposit ]),
	ipsAdvisor: goToBase([ ips, periodicdeposit, cmid ])
};
};
