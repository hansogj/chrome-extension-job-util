import { goTo } from "../util";

const localhost = `http://localhost:9002`;
export default (env: string = localhost) => {

    const base = [env, 'fpi', 'start.html'].join('/'); // `${env}/fpi/start.html?";
    const realm = "realm=storebrand";
    const cmid = "cmid=701175836";
    
    const goToBase = (args: string[]) => goTo(base, args);
    

  return {
    user: goToBase([realm]),
    advisor: goToBase([realm, cmid]),
  };
};
