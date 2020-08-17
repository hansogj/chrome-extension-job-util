import { copyStringToClipboard, goTo, localHost } from "../util";
import { users, User } from "./user";
export default (env = localHost(3000)) => {
  const ulGoTo = (path: string) => ({ contractNumber, fnr }) => {
    setTimeout(goTo([env, path, contractNumber].join("/")), 2000);
    return copyStringToClipboard(fnr);
  };

  const bindData = (user: User) => ({
    uttak: ulGoTo(`#withdrawal`).bind(this, user),
    handelskonto: ulGoTo(`#tradeaccount`).bind(this, user),
    spareavtaler: ulGoTo(`#savings`).bind(this, user),
    innbetaling: ulGoTo(`#investment`).bind(this, user),
  });

  return {
    setUser: (fnr: string, contractNumber: string) =>
      bindData({ fnr, contractNumber }),
    users: users.map(bindData),
  };
};
