import { goTo, copyStringToClipboard, localHost } from "../util";
import { users } from "./user";

export default (env: string = localHost(8000)) => {
  const auxGoTo = (path: string, fnr?: string) => () => {
    setTimeout(goTo([env, "link-selvbetjening", path].join("/")), 2000);
    return copyStringToClipboard(fnr);
  };

  return {
    usercontracts: auxGoTo("usercontracts"),
    users: users.map((user) =>
      auxGoTo(`change-portfolio'/${user.contractNumber}`, user.fnr)
    ),
    changePortfolio: (fnr: string, contractNumber: string) =>
      auxGoTo(`change-portfolio/${contractNumber}`, fnr),
  };
};
